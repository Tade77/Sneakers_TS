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
  const activeStyle = ({ isActive }: any) => {
    return {
      color: isActive ? "#ff7d1b" : "black",
    };
  };

  const { addCart, openCart, setOpenCart } = useProduct();

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
        {addCart > 0 ? <p className={`badge`}>{addCart}</p> : ""}
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
      <div>{openCart && <CartModal />}</div>
    </nav>
  );
};

export default NavBar;
