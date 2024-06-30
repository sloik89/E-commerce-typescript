import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
type FormCheckboxProps = {
  label?: string;
  name: string;
  defaultValue?: string;
};
const FormChecbox = ({ label, name, defaultValue }: FormCheckboxProps) => {
  const defaultChecked = defaultValue === "on" ? true : false;

  return (
    <div>
      <Label htmlFor={name}>{label || name}</Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
};

export default FormChecbox;
