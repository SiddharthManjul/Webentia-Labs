import React from "react";
import { GoArrowRight } from "react-icons/go";

const NavBtn = () => {
  return (
    <>
      <div className="flex flex-row capitalize gap-x-4 text-4xl font-ubuntu animate-bounce justify-end px-6">
        <a href="/about"><h1>know more</h1></a>
        <GoArrowRight />
      </div>
    </>
  );
};

export default NavBtn;
