import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a full name to proceed");
    }
    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      updateProfile(
        userAuth.user,
        {
          displayName: name,
          photoUrl: profilePic,
        },
        (error) => console.log("update profile error message", error)
      ).then(() => {
        // oush the user into a redux store
        console.log("user data", userAuth.user.email);

        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      });
    });
    //   .catch(() => alert("error message"));
  };
  return (
    <div className="login">
      <img
        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
        alt="linkedIn Logo"
      />

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name ( required if registered )"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="profile pic url ( optional )"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={register}>Sign Up</button>
        <button onClick={loginToApp}>Sign In</button>
      </form>
      <p>
        Not a Member{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
