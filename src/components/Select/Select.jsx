import React from "react";
import cls from "classnames";

const Select = ({ className, children }) => {
  return <select className={cls(className)}>{children}</select>;
};

export default Select;
