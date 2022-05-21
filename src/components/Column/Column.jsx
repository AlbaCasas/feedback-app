import React from "react";
import cls from "classnames";

const Flex = ({ children, className }) => {
  return <div className={cls("flex flex-column", className)}>{children}</div>;
};

export default Flex;
