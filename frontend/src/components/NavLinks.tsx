import React from "react";
import { links } from "@/utilis";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/hooks";

const NavLinks = () => {
  const { user } = useAppSelector((state) => state.userState);

  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => {
        const restrictedLink =
          link.label === "checkout" || link.label === "orders";
        if (restrictedLink && !user) return null;
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
