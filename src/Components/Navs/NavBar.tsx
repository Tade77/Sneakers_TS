import React from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";
const NavBar = () => {
  const activeStyle = ({ isActive }: any) => {
    return {
      color: isActive ? "#ff7d1b" : "black",
    };
  };
  const navitems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "News",
      path: "/news",
    },
    {
      id: 3,
      name: "Jobs",
      path: "/jobs",
    },
    {
      id: 4,
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav>
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
        <img className="cart" src="/public/icon-cart.svg" alt="" />
        <img className="avatar" src="/public/image-avatar.png" alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
