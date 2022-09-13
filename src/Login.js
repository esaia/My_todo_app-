import React, { useContext, useRef, useState } from "react";
import { Usercontext } from "./Usecontext/Usercontext";

const Login = () => {
  const usercontext = useContext(Usercontext);
  const usernameRef = useRef();
  const [error, seterror] = useState(false);
  const [password, setPassword] = useState("");

  let storage_obj = {
    username: usercontext.username,
    profile: usercontext.isProfile,
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (usercontext.username === "user" && password === "user") {
      usercontext.setisProfile(true);
    } else {
      setTimeout(() => {
        seterror(false);
      }, 3000);
      seterror(true);
      usercontext.setUsername("");
      setPassword("");
      usernameRef.current.focus();
    }
  };

  return (
    <form
      className="flex flex-col p-4 w-full max-w-[400px]"
      onSubmit={handlesubmit}
    >
      <input
        value={usercontext.username}
        onChange={(e) => usercontext.setUsername(e.target.value)}
        type="text"
        className="bg-gray-600 text-white m-2 px-2"
        placeholder="Username..."
        ref={usernameRef}
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="bg-gray-600 text-white m-2 px-2"
        placeholder="Password..."
      />
      <button type="submit" className="bg-blue-500 m-2 text-white">
        Submit
      </button>
      <p className="text-red-500">
        {error && "Username or password is inviled"}
      </p>
    </form>
  );
};

export default Login;
