import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css"
import logo from "./assests/linkedinlogo.png"

function Login() {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      dispatch(
        login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          name: userCredential.user.displayName,
          photoURL: userCredential.user.photoURL,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  }
  

   
  const register = async (e) => {
    e.preventDefault();

    if (!name) {
      return alert("Please enter a full name!");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(() =>{
        userCredential.user
        .updateProfile({
         
          displayName:name,
          photoUrl:profilePic
        })
      })

      dispatch(
        login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          name: name,
          photoURL:profilePic,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  
 
  }
    


  return (
    <div className="login">
      <img src={logo}alt=""/>
      <form>
      <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile URL"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>Login</button>
      </form>
      <p>Not a member? <span className="login_register" onClick={register}>Register Now</span></p>
    </div>
  );
}

export default Login;
