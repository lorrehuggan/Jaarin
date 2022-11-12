import React from "react";
import {
  SiDeliveroo,
  SiDoordash,
  SiGrubhub,
  SiInstacart,
  SiJusteat,
  SiLyft,
  SiPostmates,
  SiUber,
  SiUbereats,
} from "react-icons/si";

const Companies: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="mt-4 flex items-center justify-between">
        <SiUbereats
          title="uber eats"
          aria-label="uber eats"
          className="h-16 w-16 text-base-dark-300"
        />
        <SiUber className="h-16 w-16 text-base-dark-300" />
        <SiJusteat className="h-16 w-16 text-base-dark-300" />
        <SiLyft className="h-16 w-16 text-base-dark-300" />
        <SiDeliveroo className="h-16 w-16 text-base-dark-300" />
        <SiGrubhub className="h-16 w-16 text-base-dark-300" />
        <SiDoordash className="h-16 w-16 text-base-dark-300" />
        <SiPostmates className="h-16 w-16 text-base-dark-300" />
        <SiInstacart className="h-16 w-16 text-base-dark-300" />
      </div>
    </div>
  );
};

export default Companies;
