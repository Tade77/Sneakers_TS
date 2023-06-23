import React from "react";
import "./UserStyle.css";
import { useNavigate } from "react-router-dom";
const UserInfo = () => {
  const navigate = useNavigate();
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
          <button onClick={() => navigate("/login")} className="btn--logout">
            Log Out
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
