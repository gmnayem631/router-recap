import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h3 className="text-3xl">This is header</h3>
      <nav className="flex gap-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/mobiles"}>Mobiles</NavLink>
        <NavLink to={"/laptops"}>Laptops</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
