import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Create } from "@mui/icons-material";
import InputOption from "./InputOption";
import {
  Image,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from "@mui/icons-material";
import Post from "./Post";
import { db } from "./firebase";
import {
  getDocs,
  collection,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPostList = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        // data.query(orderBy("timestamp", "asc"));
        // console.log(data.query(orderBy("timestamp", "asc")));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        // console.log(filteredData);
        setPosts(filteredData);
      } catch (e) {
        console.error(e);
      }
    };

    getPostList();
  }, [postsCollectionRef]);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.log(e);
    }

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} color="#70B5F9" title="Photo" />
          <InputOption Icon={Subscriptions} color="#E7A33E" title="Video" />
          <InputOption Icon={EventNote} color="#C0CBCD" title="Event" />
          <InputOption
            Icon={CalendarViewDay}
            color="#7FC15E"
            title="Write Article"
          />
        </div>
      </div>

      {/* Posts  */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            description={post.description}
            message={post.message}
            photoUrl={post.photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
