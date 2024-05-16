import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

import { formatDollars } from "@/utilis/formatedDollar";
type FormRangeProps = {
  name: string;
  label: string;
  defaultValue?: string;
};
const FormRange = ({ name, label, defaultValue }: FormRangeProps) => {
  const step = 1000;
  const maxPrice = 120000;
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);
  return (
    <div className="mb-2">
      <Label htmlFor={name}>
        {label || name}
        <span>{formatDollars(selectedPrice)}</span>
      </Label>
      <Slider
        id={name}
        name={name}
        step={step}
        max={maxPrice}
        value={[selectedPrice]}
        onValueChange={(value) => setSelectedPrice(value[0])}
      />
    </div>
  );
};

export default FormRange;
