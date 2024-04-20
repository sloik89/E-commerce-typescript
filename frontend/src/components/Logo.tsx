import React from "react";
import { Link } from "react-router-dom";
import { Armchair } from "lucide-react";
const Logo = () => {
  return (
    <Link
      to="/"
      className="text-white hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg"
    >
      <Armchair className="w-8 h-8" />
    </Link>
  );
};

export default Logo;
