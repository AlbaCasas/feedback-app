import React from "react";
import cls from "classnames";

const Layout = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cls(
        "w-full flex h-auto py-[94px] px-[165px] flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
