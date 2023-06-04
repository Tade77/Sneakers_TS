import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Women";
import Women from "./Pages/Women";
import NavBar from "./Components/Navs/NavBar";
import Collection from "./Pages/Collection";
import Men from "./Pages/Men";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Preview from "./Components/Preview";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index path="/" element={<Collection />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/women/:imgId" element={<Preview />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
