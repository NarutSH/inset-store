import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Store from "./pages/Store";

const App = () => {
  return (
    <div>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
