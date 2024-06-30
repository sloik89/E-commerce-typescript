import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";
import { links } from "@/utilis";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/hooks";

const LinksDropdown = () => {
  const { user } = useAppSelector((state) => state.userState);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map((link) => {
          const restrictedRoute =
            link.label === "checkout" || link.label === "orders";
          if (!user && restrictedRoute) return null;
          return (
            <DropdownMenuItem key={link.label} className="cursor-pointer">
              <NavLink
                className={({ isActive }) => {
                  return `capitalize w-full ${
                    isActive ? "text-primary bg-slate-300" : ""
                  }`;
                }}
                to={link.href}
              >
                {link.label}
              </NavLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
