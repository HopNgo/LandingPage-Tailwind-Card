import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../useDarkMode";
import { FaMoon } from "react-icons/fa";
const NavBar = ({ isMobile }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  console.log(isDarkMode);
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-3 md:text-[25px]">NerdCard</div>
        {!isDarkMode ? (
          <FaMoon
            color={"#e9c46a"}
            className="cursor-pointer text-[20px] md:text-[26px] md:ml-5"
            onClick={toggleDarkMode}
          />
        ) : (
          <BsSunFill
            color={"#e9c46a"}
            className="cursor-pointer text-[24px] md:text-[30px] md:ml-5"
            onClick={toggleDarkMode}
          />
        )}
      </div>
      <ul className="ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        ) : (
          <></>
        )}
        {(openMenu && isMobile) || !isMobile ? (
          <div className={isMobile ? "navBarMobile" : "navBarDesktop"}>
            <li className="cursor-pointer pt-2 hover:text-purple-500">
              Features
            </li>
            <li className="cursor-pointer pt-2 hover:text-purple-500">Menu</li>
            <li className="cursor-pointer pt-2 hover:text-purple-500">
              Our Story
            </li>
            <li
              className={
                isMobile
                  ? "cursor-pointer pt-2 hover:text-purple-500"
                  : "cursor-pointer pt-2 hover:text-purple-500 ml-[5vw]"
              }
            >
              Contact
            </li>
          </div>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
