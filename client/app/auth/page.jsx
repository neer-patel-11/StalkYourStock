"use client";
import React, { useState, useEffect } from "react";
import Back from "./Back";
import Register from "@components/auth/Register";
import Login from "@components/auth/Login";

export default function Home() {
  const [isLogin, setisLogin] = useState({
    isLogin: false,
  });

  const toggleLogin = () => {
    setisLogin(!isLogin);

    if (isLogin) {
      document.getElementById("toggle").innerHTML = "Login";
    } else {
      document.getElementById("toggle").innerHTML = "Register";
    }
  };

  return (
    <>
    <Back>

    </Back>
      {/* <div className="flex justify-center">
        <button id="toggle" onClick={toggleLogin}>
          Register
        </button>
        {isLogin && <Login auth="Register" toggleLogin={toggleLogin} />}

        {!isLogin && <Register auth="Login" toggleLogin={toggleLogin} />}
      </div> */}
    </>
  );
}
