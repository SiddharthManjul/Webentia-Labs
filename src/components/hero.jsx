"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBtn from "./navBtn";

const Hero = () => {
  return (
    <div className="font-spaceGrotesk">
      <div className="hidden h-inherit md:block xl:hidden absolute z-100 top-[10%] left-[19%] transform right-[4%]">
        <a href="/" className="cursor-pointer">
          <h1 className="capitalize px-4 text-end text-8xl text-black hover:text-[#982176] transition duration-300">
            Webentia Labs
          </h1>
        </a>
      </div>

      <div className="hidden h-inherit xl:block w-3/4 absolute z-100 top-[8%] left-[22%] transform">
        <a href="/" className="cursor-pointer">
          <h1 className="capitalize ml- px-6 text-end text-9xl text-black hover:text-[#982176] transition duration-300">
            Webentia Labs
          </h1>
        </a>
      </div>

      <div className="md:hidden pt-10 h-inherit w-full absolute">
        
      </div>
    </div>
  );
};

export default Hero;
