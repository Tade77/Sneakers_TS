import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Women";
import Women from "./Pages/Women";
import NavBar from "./Components/Navs/NavBar";
import Collection from "./Pages/Collection/Collection";
import Men from "./Pages/Men";
import About from "./Pages/AboutFile/About";
import Contact from "./Pages/contact/Contact";
import Preview from "./Components/Preview";
import SneakerDetails from "./Components/Sneakers/SneakerDetails";
import OnlinePayment from "./Components/Payment/OnlinePayment";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Home/Login";
import SignUp from "./Pages/Register/SignUp";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />

        <Route index path="/" element={<Collection />} />
        <Route index path="/:sneakId" element={<SneakerDetails />} />
        <Route path="/online-payment" element={<OnlinePayment />} />
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
      <Footer />
    </div>
  );
}

export default App;
