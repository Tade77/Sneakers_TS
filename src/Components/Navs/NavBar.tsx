import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";
import CartModal from "../Modal/CartModal";
import { cartModalType } from "../../type";
import { navItems } from "../../Data";
import UserInfo from "../User/UserInfo";
const NavBar = ({ openCart, setOpenCart }: cartModalType) => {
  const [userModal, setUserModal] = useState(false);
  const activeStyle = ({ isActive }: any) => {
    return {
      color: isActive ? "#ff7d1b" : "black",
    };
  };

  return (
    <nav className={`openCart ? "cart--modal" : "" `}>
      <div className="nav--group">
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="navs">
          {navItems.map((navItem, id) => (
            <NavLink to={navItem.path} key={id} style={activeStyle}>
              {navItem.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="cart--avatar">
        <img
          onClick={() => setOpenCart(true)}
          className="cart"
          src="/icon-cart.svg"
          alt=""
        />
        <p className={`bagde`}>3</p>
        <div className={`userModal ? "avatar--modal : ""`}>
          <img
            onClick={() => setUserModal(true)}
            className="avatar"
            src="/image-avatar.png"
            alt=""
          />
        </div>
      </div>
      <div onClick={() => setUserModal(false)}>{userModal && <UserInfo />}</div>
      <div>
        {openCart && <CartModal setOpenCart={setOpenCart} openCart={false} />}
      </div>
    </nav>
  );
};

export default NavBar;
