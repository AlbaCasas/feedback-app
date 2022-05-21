import React from "react";
import cls from "classnames";

const Box = ({ children, className }) => {
  return <div className={cls(className)}>{children}</div>;
};

export default Box;
