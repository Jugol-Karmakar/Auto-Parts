import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { FaTimes, FaBars, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-10 flex justify-between items-center bg-white py-3 lg:py-0">
      <div>
        <h1 className="text-3xl font-black">
          <span className="text-[#0989f1]">Auto</span>Parts
        </h1>
      </div>
      <button className="z-40 block lg:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>
      <div
        className={`flex flex-col justify-center items-center lg:flex-row fixed z-20 top-0 ${
          open ? "left-0" : "-left-full"
        } w-1/2 lg:w-auto bg-white shadow-lg lg:shadow-none lg:static h-screen lg:h-auto  transition-all duration-300`}
      >
        <CustomLink
          className="my-5 mr-5 inline-block px-3 text-lg font-semibold"
          to="/"
        >
          Home
        </CustomLink>
        <CustomLink
          className="my-5 mr-5 inline-block px-3 text-lg font-semibold"
          to="/purchase"
        >
          Purchase
        </CustomLink>
        <CustomLink
          className="my-5 mr-5 inline-block px-3 text-lg font-semibold"
          to="/blog"
        >
          blog
        </CustomLink>
        <CustomLink
          className="my-5 mr-5 inline-block px-3 text-lg font-semibold"
          to="/contact"
        >
          Contact
        </CustomLink>
        <CustomLink
          className="my-5 mr-5 inline-block px-3 text-lg font-semibold"
          to="/portfolio"
        >
          Portfolio
        </CustomLink>
        <CustomLink
          className="my-5 mr-5 flex items-center px-6 text-white text-lg font-semibold bg-blue-600 py-2 rounded-full "
          to="/signin"
        >
          <FaSignInAlt className="mr-2" />
          Sign In
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
