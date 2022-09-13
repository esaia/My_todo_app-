import React, { useContext } from "react";
import Todos from "./Todos";
import { Usercontext } from "./Usecontext/Usercontext";

const Profile = () => {
  const usercontext = useContext(Usercontext);

  const logout = () => {
    usercontext.setisProfile(false);
    usercontext.setUsername("");
  };

  return (
    <div className="flex flex-col p-4 m-3 bg-green-300 w-full max-w-[600px]">
      <p>{usercontext.username}</p>
      <Todos />
      <button className="bg-black text-white mt-5" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
