import React from "react";
import { links } from "@/utilis";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => {
        return (
          <NavLink
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide ${
                isActive ? "text-primary" : ""
              }`;
            }}
            to={link.href}
            key={link.label}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
