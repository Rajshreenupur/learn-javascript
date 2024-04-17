import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widges from "./Widges";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
// import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

function App() {
  // const user = useSelector(selectUser);
  // const dispatch =useDispatch();

  // useEffect(() =>{
  //   auth.onAuthStateChanged(userAuth => {
  //     if(userAuth){
  //       //user is logged in
  //       dispatch(login({
  //         email:userAuth.email,
  //         uid:userAuth.uid,
  //         displayName:userAuth.displayName,
  //         photoUrl:userAuth.photoURL,
  //       }
  //       ))
  //     }else{
  //       //user is logged out
  //       dispatch(logout());
  //     }
  //   })

  // },[])

  return (

    <div className="app">
      <Header />
      <div className="app_body">
          <Sidebar />
          <Feed />
          <Widges />
        </div>

        {/* <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widges />
        </div> */}
      {/* )} */}
    </div>
  );
}

export default App;
