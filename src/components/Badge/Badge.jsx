import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import Text from "../Text";
import cls from "classnames";

const Badge = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cls(
        "w-[40px] h-[56px] bg-background flex items-center justify-center flex-col  rounded-lg",
        className
      )}
    >
      <MdKeyboardArrowUp />
      <Text subtitle="subtitle">{children}</Text>
    </div>
  );
};

export default Badge;
