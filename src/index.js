import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Usercontextprovider } from "./Usecontext/Usercontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Usercontextprovider>
      <App />
    </Usercontextprovider>
  </React.StrictMode>
);
