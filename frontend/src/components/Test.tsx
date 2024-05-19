import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useAppDispatch } from "../hooks";

const Test = () => {
  const labels = ["Anime", "Dramat", "Horror", "Komedie"];
  const [label, setLabel] = useState("Anime");
  const [show, setShow] = useState(false);
  return (
    <div className="bg-slate-600 text-white w-[100px] h-8 relative ">
      <div className="absolute w-full h-60 top-0">
        <button onClick={() => setShow(!show)}>{label}</button>
        <ul className={`${show ? "h-full" : "h-0"} flex flex-col gap-y-2 `}>
          {labels.map((item, idx) => {
            return (
              <li
                onClick={() => {
                  setShow(false);
                  setLabel(item);
                }}
                key={idx}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Test;
