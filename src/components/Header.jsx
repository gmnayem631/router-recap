import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h3 className="text-3xl">This is header</h3>
      <nav className="flex gap-3">
        <NavLink to={"/"}>
          <button className="cursor-pointer border border-amber-500 p-2 rounded-xl">
            Home
          </button>
        </NavLink>
        <NavLink to={"/mobiles"}>
          <button className="cursor-pointer border border-amber-500 p-2 rounded-xl">
            Mobiles
          </button>
        </NavLink>
        <NavLink to={"/laptops"}>
          <button className="cursor-pointer border border-amber-500 p-2 rounded-xl">
            Laptops
          </button>
        </NavLink>
        <NavLink to={"/users"}>
          <button className="cursor-pointer border border-amber-500 p-2 rounded-xl">
            Users
          </button>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
