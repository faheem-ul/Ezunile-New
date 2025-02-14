"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";

import Drawer from "../ui/Drawer";

// import logo from "@/public/eb logo.png";
import { cn } from "@/lib/utils/twMerge";

import togglesvg from "@/public/icons/toggle.svg";
import Text from "../ui/Text";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // console.log(currentPathname);

  const [BooknowToggle] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className="absolute  z-50  w-full px-5 ">
        <div className=" max-w-[1420px]   w-full flex flex-wrap items-center justify-between mx-auto ">
          <div className="flex justify-between items-center w-full ">
            <Link
              href="/"
              className=" mob:max-w-[182px]   group pt-6" // Added group class here
            >
              {/* First Text (E with ze) */}
              <Text className="relative inline-block text-[40px]">
                E
                <span className="absolute left-[-30%] opacity-0 transition-all duration-500 ease-in-out group-hover:left-[22px] group-hover:opacity-100">
                  ze
                </span>
              </Text>
              <br />
              {/* Second Text (B with urts) */}
              <Text className="relative inline-block text-[40px] mt-[-23px]">
                B
                <span className="absolute left-[-30%] opacity-0 transition-all duration-500 ease-in-out group-hover:left-[26px] group-hover:opacity-100">
                  urts
                </span>
              </Text>
            </Link>

            <div className="flex xl:pr-4 xl:hidden  ">
              <button
                // onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-gray-700 dark:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <Image src={togglesvg} alt="" width={83} height={18} />
              </button>
            </div>

            {/* tab and mob  menu*/}
            <div className="block mob:pr-0 ">
              <div
                className="relative cursor-pointer flex pr-2 mob:pr-0 pt-[5px]"
                onClick={onOpen}
              >
                <button
                  // onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center p-2 w-[64px] h-[64px] justify-center text-sm  bg-transparent text-white rounded-lg  "
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <Image src={togglesvg} alt="" width={64} height={64} />
                </button>
              </div>
              <div className="relative z-40">
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <div className="flex items-center h-full w-full ">
                    <ul className="font-normal  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                      <Link
                        href="/"
                        className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#22282F]  "
                      >
                        <Text className="flex pl-16 font-bold justify-start py-[15px] list-items">
                          Home
                        </Text>
                      </Link>
                      <Link
                        href="/bio"
                        className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#22282F]  "
                      >
                        <Text className="flex pl-16 font-bold justify-start py-[15px] list-items">
                          Bio
                        </Text>
                      </Link>
                      <a
                        href="/professional-experience"
                        className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#22282F]  "
                      >
                        <Text className="flex pl-16 font-bold justify-start py-[15px] list-items">
                          Professional Experience and Industry Expertise
                        </Text>
                      </a>
                      <a
                        href="/boards-and-advisory-committees"
                        className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#22282F]  "
                      >
                        <Text className="flex pl-16 font-bold justify-start py-[15px] list-items">
                          Boards and Advisory Committees
                        </Text>
                      </a>
                      <a
                        href="/leadership-growth-professional-solutions"
                        className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#22282F]  "
                      >
                        <Text className="flex pl-16 font-bold justify-start py-[15px] list-items">
                          Leadership Growth & Professional Solutions
                        </Text>
                      </a>

                      {/* <a
                        href=""
                        className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#22282F]  "
                      >
                        <Text className="flex pl-16 font-bold justify-start py-[15px] list-items">
                          Join
                        </Text>
                      </a> */}
                      {/* <a
                        href=""
                        className="block  text-[20px] font-inter font-medium leading-[25.5px] text-[#22282F]  "
                      >
                        <Text className="flex pl-16 font-bold justify-start py-[15px] list-items">
                          Connect
                        </Text>
                      </a> */}

                      <div
                        className={cn(
                          "pt-1 pb-4 flex items-center flex-col h-full justify-center",
                          BooknowToggle ? "flex" : "hidden"
                        )}
                      >
                        <div className="w-full h-[1px] bg-[#C0C0C0] mb-3"></div>
                        <a
                          href="http://pcols.com/!NDI2"
                          className="text-white text-[14px] font-medium font-inter"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Waldorf
                        </a>
                        <a
                          href="http://pcols.com/!Nzgx"
                          className="text-white mt-2 text-[14px] font-medium font-inter"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Takoma Park
                        </a>
                      </div>
                    </ul>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
