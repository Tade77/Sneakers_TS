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
import SneakerDetails from "./Components/SneakerDetails";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="App">
      <NavBar openCart={openCart} setOpenCart={setOpenCart} />
      <Routes>
        <Route index path="/" element={<Collection />} />
        <Route index path="/:sneakId" element={<SneakerDetails />} />
        <Route path="/men" element={<Men />} />
        <Route
          path="/women"
          element={<Women openModal={openModal} setOpenModal={setOpenModal} />}
        />
        <Route
          path="/women/:imgId"
          element={
            <Preview openModal={openModal} setOpenModal={setOpenModal} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
