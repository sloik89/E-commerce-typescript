import React from "react";
import { Logo, LinksDropdown, NavLinks, ModeToggle, CartButton } from "./";
const Navbar = () => {
  return (
    <nav className="bg-muted py-4">
      <div className="flex justify-between items-center align-element ">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="flex justify-center gap-x-4">
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
