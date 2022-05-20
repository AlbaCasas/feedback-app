import React from "react";

const Layout = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="w-full flex h-auto py-[94px] px-[165px] flex-col "
    >
      {children}
    </div>
  );
};

export default Layout;
