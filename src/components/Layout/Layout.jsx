import React from "react";

const Layout = ({ children, ...props }) => {
  return (
    <div {...props} className="w-full flex h-auto flex-col sm:p-6 ">
      {children}
    </div>
  );
};

export default Layout;
