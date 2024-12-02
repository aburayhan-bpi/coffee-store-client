import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { key: "home", to: "/", label: "Home" },
    { key: "addCoffee", to: "/addCoffee", label: "Add Coffee" },
    { key: "signIn", to: "/signIn", label: "Sign In" },
    { key: "signUp", to: "/signUp", label: "Sign Up" },
    { key: "users", to: "/users", label: "Users" },
  ];

  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.key}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Coffee</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.key}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
