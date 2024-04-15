import React, { useState } from "react";
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

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();

    
  } 
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Send</button>
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
      <Post
        name="Ene Andre"
        description="Testing this out"
        message="you are doing great"
      />
      {posts.map((post) => (
        <Post
          name={post.name}
          description={post.description}
          message={post.message}
        />
      ))}
    </div>
  );
};

export default Feed;
