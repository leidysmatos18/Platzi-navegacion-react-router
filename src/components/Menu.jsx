import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const menuList = [
    {
      name: "Home Page",
      to: "/",
    },
    {
      name: "Blog Page",
      to: "/blog",
    },
    {
      name: "Profile Page",
      to: "/profile",
    },
  ];

  return (
    <nav className="bg-secondary py-2 d-flex justify-content-center align-items-center">
      <ul className="list-unstyled d-flex my-0">
        {menuList.map((item, index) => {
          return (
            <li key={index} className="">
              <NavLink
                to={item.to}
                className="text-decoration-none me-5 fs-2"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "blue",
                })}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
