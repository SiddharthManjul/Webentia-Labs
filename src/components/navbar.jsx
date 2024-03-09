"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "research",
    },
    {
      id: 4,
      link: "community",
    },
    {
      id: 5,
      link: "contact us",
    },
  ];

  return (
    <>
      <div className="flex font-ubuntu bg-gradient-to-br from-tealdark via-teallight via-50% to-fleshdark">
        <ul className="hidden md:flex md:flex-col xl:hidden ml-2 h-screen justify-center gap-y-8 relative z-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="uppercase text-2xl text-black hover:translate-x-4 hover:text-[#982176] hover:border-[#982176] hover:font-bold hover:translate-y-2 hover:scale-125 transition duration-300"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>

        <ul className="hidden xl:flex xl:flex-col ml-4 h-screen justify-center gap-y-12 relative z-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="uppercase text-3xl text-black hover:font-bold hover:translate-x-4 hover:text-[#982176] hover:border-[#982176] hover:translate-y-2 hover:scale-125 transition duration-300"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer p-4 z-10 text-beigelight md:hidden pl-8 pt-8 absolute flex flex-row "
        >
          {nav ? (
            <FaTimes
              size={30}
              className="animate-spin hover:rotate-90 w-16 h-16 p-2 border-2 rounded-full border-beige bg-black hover:bg-[#982176] transition duration-300 text-inherit"
            />
          ) : (
            <FaBars
              size={30}
              className="w-16 h-16 p-2 border-2 rounded-full border-beigelight bg-black hover:animate-spin hover:bg-[#982176] transition duration-300"
            />
          )}
          <h1 className="capitalize text-end h-inherit text-5xl mr-8 mt-0 text-black hover:text-[#982176] transition duration-300 pt-2 pl-5">
            <a href="/" className="cursor-pointer">
              Webentia Labs
            </a>
          </h1>
        </div>

        {nav && (
          <motion.div
            className={
              nav
                ? "flex flex-col justify-center items-left absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-tealdark via-teallight via-50% to-fleshdark text-black"
                : "flex flex-col justify-center items-left top-0 left-[100%] w-full h-screen bg-gradient-to-tr from-tealdark via-teallight via-50% to-fleshdark text-black"
            }
          >
            <ul className="">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 pl-8 cursor-pointer uppercase py-6 text-4xl hover:translate-x-2 hover:font-bold hover:text-[#982176] transition duration-300"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
