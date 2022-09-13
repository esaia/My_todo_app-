import { useContext } from "react";
import "./App.css";
import Login from "./Login";
import { Usercontext } from "./Usecontext/Usercontext";
import Profile from "./Profile";
function App() {
  const usercontext = useContext(Usercontext);

  return (
    <div className="w-full flex justify-center">
      {usercontext.isProfile ? (
        <Profile />
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
