import React, { useState } from "react";
type ColorsProps = {
  colors: string[];
  active: string;
  handleActive: React.Dispatch<React.SetStateAction<string>>;
};
const SelectProductColor = ({ colors, active, handleActive }: ColorsProps) => {
  return (
    <div>
      <p className="font-semibold text-lg mb-3">Colors</p>
      <div className="flex gap-x-3 mb-4">
        {colors.map((item, idx) => {
          return (
            <button
              key={idx}
              className={`w-6 h-6 rounded-full hover:scale-110 transition-transform ${
                item === active ? "scale-150 border-2 border-primary" : ""
              }`}
              style={{
                backgroundColor: item,
              }}
              onClick={() => handleActive(item)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectProductColor;
