import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Women";
import Women from "./Pages/Women";
import NavBar from "./Components/Navs/NavBar";
import Collection from "./Pages/Collection/Collection";
import About from "./Pages/AboutFile/About";
import Contact from "./Pages/contact/Contact";
import Preview from "./Components/Preview";
import SneakerDetails from "./Components/Sneakers/SneakerDetails";
import OnlinePayment from "./Components/Payment/OnlinePayment";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Pages/Register/SignUp";
import LoginPage from "./Pages/Home/Login";
import WishList from "./Pages/Men";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUp />} />

        <Route index path="/" element={<Collection />} />
        <Route path="/:sneakId" element={<SneakerDetails />} />
        <Route path="/online-payment" element={<OnlinePayment />} />
        <Route path="/men" element={<WishList />} />
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
