import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/auth";
const Menu = () => {
  const auth = useAuth();

  const menuList = [
    {
      name: "Home Page",
      to: "/",
      private: false,
    },
    {
      name: "Blog Page",
      to: "/blog",
      private: false,
    },
    {
      name: "Profile Page",
      to: "/profile",
      private: true,
    },
    {
      name: "Login",
      to: "/login",
      private: false,
      publicOnly: true,
    },
    {
      name: "Logout",
      to: "/logout",
      private: true,
    },
  ];

  return (
    <nav className="bg-secondary py-2 d-flex justify-content-center align-items-center">
      <ul className="list-unstyled d-flex my-0">
        {menuList.map((item, index) => {
          if (item.publicOnly && auth.user) return null;
          if (item.private && !auth.user) return null;
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
