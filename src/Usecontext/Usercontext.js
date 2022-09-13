import { createContext, useEffect, useState } from "react";

export const Usercontext = createContext();

const getlocalstorage = () => {
  let user_obj = localStorage.getItem("user");
  if (user_obj) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return { isProfile: false };
  }
};

export const Usercontextprovider = ({ children }) => {
  const [userStorage, setuserStorage] = useState(getlocalstorage());
  const [username, setUsername] = useState(userStorage.username);
  const [isProfile, setisProfile] = useState(userStorage.isProfile);

  let user_obj = {
    isProfile,
    username: username,
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user_obj));
  }, [isProfile]);

  return (
    <Usercontext.Provider
      value={{ username, setUsername, isProfile, setisProfile }}
    >
      {children}
    </Usercontext.Provider>
  );
};
