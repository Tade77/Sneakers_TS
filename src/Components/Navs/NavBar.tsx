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
      name: "Collection",
      path: "/",
    },
    {
      id: 2,
      name: "Men",
      path: "/men",
    },
    {
      id: 3,
      name: "Women",
      path: "/women",
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
        <img className="cart" src="/icon-cart.svg" alt="" />
        <img className="avatar" src="/image-avatar.png" alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
