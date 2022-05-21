import React from "react";
import cls from "classnames";

const Row = ({ children, className }) => {
  return <div className={cls("flex", className)}>{children}</div>;
};

export default Row;
