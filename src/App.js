// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Rourter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import GalleryPage from "./Pages/GalleryPage";

function App() {
  return (
    <Rourter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Rourter>
  );
}

export default App;
