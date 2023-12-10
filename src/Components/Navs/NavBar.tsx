import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";
import CartModal from "../Modal/CartModal";
import { addCartType, cartModalType } from "../../type";
import { navItems } from "../../Data";
import UserInfo from "../User/UserInfo";
import { useProduct } from "../Context/ProductContext";

const NavBar = () => {
  const [userModal, setUserModal] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { addCart } = useProduct();
  const activeStyle = ({ isActive }: any) => {
    return {
      color: isActive ? "#ff7d1b" : "black",
    };
  };

  return (
    <nav>
      <div
        onClick={() => setMobile(false)}
        className={mobile ? "mobileView" : "nav--group"}
      >
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
        <p className={`badge`}>{addCart}</p>
        <div className={`userModal ? "avatar--modal : ""`}>
          <img
            onClick={() => setUserModal(true)}
            className="avatar"
            src="/public/profile.png"
            alt=""
          />
        </div>
      </div>
      <div onClick={() => setUserModal(false)}>{userModal && <UserInfo />}</div>
      <div>{openCart && <CartModal setOpenCart={setOpenCart} />}</div>
      <div className="menu" onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <img className="menu--icon" src="/public/icon-close.svg" alt="" />
        ) : (
          <img className="menu--icon" src="/public/icon-menu.svg" alt="" />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
