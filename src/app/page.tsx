"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/hero";
import NavBtn from "@/components/navBtn";

const Home = () => {
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
          Envisioning D-Web R&D Paradigms!
        </p>
        <p className="font-spaceGrotesk text-2xl text-end px-6 mt-2 leading-relaxed">
          Building & Empowering next-gen solutions to make D-Web truly
          Decentralized.
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
          Envisioning D-Web R&D Paradigms!
        </p>
        <p className="font-spaceGrotesk text-2xl text-end px-6 mt-2 leading-relaxed">
          Building & Empowering next-gen solutions to make D-Web truly
          Decentralized.
        </p>
        <div className="mt-24">
          <NavBtn />
        </div>
      </motion.div>
      <motion.div
        className="md:hidden w-full h-screen pt-[25%] transform bg-gradient-to-br from-tealdark via-teallight via-50% to-fleshdark"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 0, scale: 0 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 1 },
        }}
      >
        <p className="font-spaceGrotesk text-4xl text-center px-6 mt-16 leading-relaxed font-bold">
          Envisioning D-Web R&D Paradigms!
        </p>
        <p className="font-spaceGrotesk text-2xl text-center px-6 mt-2 leading-relaxed">
          Building & Empowering next-gen solutions to make D-Web truly
          Decentralized.
        </p>
        <div className="mt-10">
          <NavBtn />
        </div>
      </motion.div>
      <h1>sdkijbfciousdbf</h1>
    </div>
  );
};

export default Home;
