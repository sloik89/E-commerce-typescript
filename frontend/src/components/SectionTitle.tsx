import React from "react";
import { Separator } from "./ui/separator";
const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className="text-3xl font-medium mb-8 tracking-wider capitalize">
        {text}
      </h2>
      <Separator />
    </div>
  );
};

export default SectionTitle;
