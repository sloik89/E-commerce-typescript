import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
type formInput = {
  label?: string;
  name: string;
  type: string;
  defaultValue?: string;
};
const FormInput = ({ label, name, type, defaultValue }: formInput) => {
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
};

export default FormInput;
