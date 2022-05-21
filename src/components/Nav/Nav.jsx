import React from "react";
import cls from "classnames";

import Badge from "../Badge";
import Box from "../Box/Box";
import Button from "../Button";
import Row from "../Row";
import Text from "../Text";

const Nav = ({ className }) => {
  return (
    <Row
      className={cls(
        "h-[72px] p-3 w-full bg-darkBlue rounded-lg items-center justify-between",
        className
      )}
    >
      <Row className="items-center gap-8">
        <Text subheading className="text-white">
          6 suggestions
        </Text>
        <Box>
          <Text caption className="text-white">
            Sort by:
          </Text>
          <select
            className="text-sm bg-transparent font-bold text-white border-none outline-0"
            name="select"
          >
            <option value="value1">Value 1</option>
            <option value="value2" selected>
              Value 2
            </option>
            <option value="value3">Value 3</option>
          </select>
        </Box>
        <Badge>112</Badge>
      </Row>

      <Button>Add feedback</Button>
    </Row>
  );
};

export default Nav;
