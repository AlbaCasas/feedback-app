import React from "react";
import cls from "classnames";

const classes = {
  heading: "text-700 font-bold leading-[35px] tracking-[-0.33px]",
  subheading: "text-600 font-bold leading-[29px] tracking-[-0.25px]",
  title: "text-500 font-bold leading-[26px] tracking-[-0.25px]",
  subtitle: "text-400 font-bold leading-[20px] tracking-[-0.2px]",
  regular: "text-300 leading-[23px]",
  small: "text-200 leading-[22px]",
  caption: "text-100 font-semibold leading-[19px]",
};

const Text = ({
  children,
  className,
  heading,
  subheading,
  title,
  subtitle,
  regular,
  small,
  caption,
}) => {
  return (
    <span
      className={cls(className, {
        [classes.heading]: heading,
        [classes.subheading]: subheading,
        [classes.title]: title,
        [classes.subtitle]: subtitle,
        [classes.regular]: regular,
        [classes.small]: small,
        [classes.caption]: caption,
      })}
    >
      {children}
    </span>
  );
};

export default Text;
