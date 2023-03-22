import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setDarkMode(!darkMode);
  };

  return (
    <div className="text-white flex items-center h-24 max-w-[1240px] mx-auto px-4 justify-between">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a]">DAMN.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="flex cursor-pointer" onClick={handleToggle}>
        {toggle ? (
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
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" w-full text-3xl font-bold text-[#00df9a] m-4">DAMN.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
