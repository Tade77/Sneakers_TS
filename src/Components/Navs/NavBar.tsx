import React from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";
import CartModal from "../Modal/CartModal";
import { cartModalType } from "../../type";
import { navitems } from "../../Data";
const NavBar = ({ openCart, setOpenCart }: cartModalType) => {
  const activeStyle = ({ isActive }: any) => {
    return {
      color: isActive ? "#ff7d1b" : "black",
    };
  };

  return (
    <nav className={`openCart ? "cart--modal: "" `}>
      <div className="nav--group">
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="navs">
          {navitems.map((navitem, id) => (
            <NavLink to={navitem.path} key={id} style={activeStyle}>
              {navitem.name}
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
        <p className="bagde">3</p>
        <img className="avatar" src="/image-avatar.png" alt="" />
      </div>
      {openCart && <CartModal setOpenCart={setOpenCart} openCart={false} />}
    </nav>
  );
};

export default NavBar;
