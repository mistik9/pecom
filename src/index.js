import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// window.BX24.init(function () {
//   let { member_id } = window.BX24.getAuth();

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App member_id={1} />
      </BrowserRouter>
    </React.StrictMode>
  );
// });
