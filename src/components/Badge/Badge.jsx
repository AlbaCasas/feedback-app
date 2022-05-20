import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Badge = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`w-[40px] h-[56px] bg-background flex items-center justify-center flex-col  rounded-lg ${className}`}
    >
      <MdKeyboardArrowUp />
      <span className="font-bold">{children}</span>
    </div>
  );
};

export default Badge;
