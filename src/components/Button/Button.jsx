import React from "react";
import { FaPlus } from "react-icons/fa";
import cls from "classnames";
import Text from "../Text";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cls(
        "text-white font-bold py-2 px-3 bg-primary rounded-lg",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 min-h-[24px] ">
        <FaPlus className="text-xs" />
        <Text subtitle="subtitle">{children}</Text>
      </div>
    </button>
  );
};

export default Button;
