import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={props.darkMode ? "dark" : ""}>
      <div className="text-white dark:text-black dark:bg-[#ffffff] flex items-center h-24 max-w-[1240px] mt-[-1rem] mx-auto px-4 justify-between">
        <h1 className=" w-full text-3xl font-bold text-[#00df9a]">DAMN.</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div className="flex cursor-pointer" onClick={props.toggleDarkMode}>
          {props.darkMode ? (
            <div className="flex cursor-pointer">
              DarkMode <FaToggleOff size={20} className="ml-2 mr-4 mt-0.5" />
            </div>
          ) : (
            <div className="flex cursor-pointer">
              DarkMode <FaToggleOn size={20} className="ml-2 mr-4 mt-0.5" />
            </div>
          )}
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 dark:border-gray-300 dark:text-black dark:bg-[#ffffff]"
              : "fixed left-[-100%]"
          }
        >
          <h1 className=" w-full text-3xl font-bold text-[#00df9a] m-4">
            DAMN.
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
