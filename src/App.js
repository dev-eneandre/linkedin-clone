import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { getAuth } from "firebase/auth";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        setAuthUser(userAuth?.displayName);
      } else {
        dispatch(logout());
      }
    });
  }, [authUser]);
  return (
    <div className="app ">
      <Header />

      {!authUser ? (
        <Login />
      ) : (
        <div className="app__body section">
          <Sidebar />
          <Feed />

          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
