"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/hero";
import NavBtn from "@/components/navBtn";

const AboutHero = () => {
  return (
    <div>
      <Hero />
      <motion.div
        className="hidden h-inherit xl:block w-3/4 absolute z-100 top-[23%] left-[22%] transform"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 0, scale: 0 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 0.4 },
        }}
      >
        <p className="font-spaceGrotesk text-6xl text-end px-6 mt-36 leading-relaxed font-bold">
          About the Paradigm!
        </p>
        <p className="font-spaceGrotesk text-2xl text-end px-6 mt-2 leading-relaxed">
          Who are we? What is Webentia Labs?
        </p>
        <div className="mt-24 text-end">
          <NavBtn />
        </div>
      </motion.div>
      <motion.div
        className="hidden h-inherit md:block xl:hidden w-3/4 absolute z-100 top-[23%] left-[22%] transform"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 0, scale: 0 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 1 },
        }}
      >
        <p className=" font-spaceGrotesk text-5xl text-end px-6 mt-36 leading-relaxed font-bold">
          About the Paradigm!
        </p>
        <p className="font-spaceGrotesk text-2xl text-end px-6 mt-2 leading-relaxed">
          Who are we? What is Webentia Labs?
        </p>
        <div className="mt-24">
          <NavBtn />
        </div>
      </motion.div>
      <div
        className="md:hidden w-full h-screen pt-[25%] transform bg-gradient-to-br from-tealdark via-teallight via-50% to-fleshdark"
      >
        <p className="font-spaceGrotesk text-4xl text-center px-6 mt-16 leading-relaxed font-bold">
          Know the Paradigm!
        </p>
        <p className="font-spaceGrotesk text-2xl text-center px-6 mt-2 leading-relaxed">
          Who are we? What is Webentia Labs?
        </p>
        <div className="mt-10">
          <NavBtn />
        </div>
      </div>
      <h1>sdkijbfciousdbf</h1>
    </div>
  );
};

export default AboutHero;
