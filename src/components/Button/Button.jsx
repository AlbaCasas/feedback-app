import React from "react";
import { FaPlus } from "react-icons/fa";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-white font-bold py-2 px-3 bg-primary rounded-lg ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2">
        <FaPlus className="text-xs" />
        {children}
      </div>
    </button>
  );
};

export default Button;
