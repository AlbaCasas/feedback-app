import React from "react";
import Button from "../Button";

const Nav = () => {
  return (
    <div className="h-[72px] p-3 w-full bg-darkBlue rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-8">
        <span className="font-bold text-lg text-white">6 suggestions</span>
        <div>
          <span className="text-sm text-white ">Sort by:</span>
          <select
            className="text-sm bg-transparent font-bold text-white border-none outline-0  "
            name="select"
          >
            <option value="value1">Value 1</option>
            <option value="value2" selected>
              Value 2
            </option>
            <option value="value3">Value 3</option>
          </select>
        </div>
      </div>

      <Button>Add feedback</Button>
    </div>
  );
};

export default Nav;
