import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";
import About from "./About";
import Help from "./Help";
import Settings from "./Settings";


function App({ }) {
;


  return (
    <div className="app">
      <Routes>
        <Route path="/settings" element={<Settings  />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
