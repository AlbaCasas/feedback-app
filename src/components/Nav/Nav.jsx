import React from "react";
import Badge from "../Badge";
import Button from "../Button";
import Select from "../Select";
import Text from "../Text";

const Nav = () => {
  return (
    <div className="h-[72px] p-3 w-full bg-darkBlue sm:rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Text title="title" className="text-white hidden sm:block ">
          6 suggestions
        </Text>
        <div>
          <Text regular="regular" className="text-white ">
            Sort by:
          </Text>
          <Select
            className=" border-none outline-0 bg-darkBlue text-white "
            name="select"
          >
            <option value="" selected disabled hidden>
              All
            </option>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </Select>
        </div>
      </div>

      <Button>Add feedback</Button>
    </div>
  );
};

export default Nav;
