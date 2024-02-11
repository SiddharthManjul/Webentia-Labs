"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

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
      <div className="flex font-ubuntu">
        <ul className="hidden md:flex md:flex-col h-screen justify-center gap-y-8">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="uppercase text-xl"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer p-4 w-full z-10 text-white md:hidden"
        >
          {nav ? (
            <FaTimes
              size={30}
              className="animate-spin hover:rotate-90 w-16 h-16 p-2 border-2 rounded-full border-black bg-black"
            />
          ) : (
            <FaBars
              size={30}
              className="w-16 h-16 p-2 border-2 rounded-full border-black bg-black hover:animate-spin"
            />
          )}
        </div>

        {nav && (
          <div
            className={
              nav
                ? "flex flex-col justify-center items-left z-1000 absolute top-0 left-0 ease-in duration-300 w-full h-screen bg-white text-gray-500"
                : "flex flex-col justify-center items-left z-1000 absolute top-0 left-[-100%] ease-in duration-300 w-full h-screen bg-white text-gray-500"
            }
          >
            <ul>
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl hover:bg-gradient-to-r from-black to-gray-800 backdrop-blur-xl"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
