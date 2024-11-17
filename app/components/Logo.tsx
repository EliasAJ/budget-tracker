import { DollarSign } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center">
      <div className="flex space-x-[-0.8rem]">
        {Array(2).fill(null).map((_, index) => (
          <DollarSign
            key={index}
            className="stroke h-9 w-9 stroke-teal-700 stroke-[1.7]"
          />
        ))}
      </div>
      <p className="ml-1 bg-gradient-to-r from-teal-700 to-sky-300 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Budget Tracker
      </p>
    </a>
  );
}

export default Logo;