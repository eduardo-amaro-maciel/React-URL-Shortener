import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
   <React.StrictMode>
      <ToastContainer />
      <App />
   </React.StrictMode>
);
