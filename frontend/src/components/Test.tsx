import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useAppDispatch } from "../hooks";
import { setTheme } from "../features/theme/themeTestSlice";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Test = () => {
  const dispatch = useAppDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-blue-500 p-2 rounded-lg flex">
        <Sun className="scale-100 dark:scale-0" />
        <Moon className="absolute scale-0 dark:scale-100 " />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-12">
        <DropdownMenuItem onClick={() => dispatch(setTheme("dark"))}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem>Light</DropdownMenuItem>
        <DropdownMenuItem>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Test;
