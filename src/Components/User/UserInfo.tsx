import React from "react";
import "./UserStyle.css";
import { useNavigate } from "react-router-dom";
import { pb } from "../../Pocketbase";
import { useProduct } from "../Context/ProductContext";
const UserInfo = () => {
  const { logout } = useProduct();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    pb.authStore.clear();
    navigate("/login");
  };

  return (
    <div className="avatar-modal">
      <section className="sec1">
        <div className="avatar-plus">
          <img
            className="plus-img"
            src="/public/image-avatar.png"
            alt="avatar"
          />
        </div>
      </section>
      <section className="sec2">
        <div className="user-bio">
          <h2>Johnny Doe</h2>
          <span className="mail">johnnydoe2023@gmail.com</span>
        </div>
        <div className="logout">
          <button onClick={handleLogout} className="btn--logout">
            Log Out
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
