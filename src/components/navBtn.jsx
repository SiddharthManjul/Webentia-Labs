import React from "react";
import { GoArrowRight } from "react-icons/go";

const NavBtn = () => {
  return (
    <>
      <div className="flex capitalize text-4xl font-ubuntu justify-end px-6 font-normal w-inherit">
        <a href="/about">
          <h1 className="hover:animate-bounce flex flex-row gap-x-4">
            know more <GoArrowRight />
          </h1>
        </a>
      </div>
    </>
  );
};

export default NavBtn;
