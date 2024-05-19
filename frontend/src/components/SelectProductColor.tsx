import { useState } from "react";
type ColorsProps = {
  colors: string[];
};
const SelectProductColor = ({ colors }: ColorsProps) => {
  const [active, setActive] = useState(colors[0]);
  return (
    <div>
      <p className="font-semibold text-lg mb-3">Colors</p>
      <div className="flex gap-x-3 mb-4">
        {colors.map((item, idx) => {
          return (
            <button
              key={idx}
              className={`w-6 h-6 rounded-full hover:scale-110 transition-transform ${
                item === active ? "scale-150" : ""
              }`}
              style={{
                backgroundColor: item,
              }}
              onClick={() => setActive(item)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectProductColor;
