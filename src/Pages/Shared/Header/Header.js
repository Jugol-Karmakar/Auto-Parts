import React, { useEffect, useState } from "react";
import CustomLink from "../../CustomLink/CustomLink";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    <div className="w-full px-10 flex justify-between items-center bg-white py-3 lg:py-0">
      <div>
        <h1 className="text-3xl font-bold">
          <span className="text-[#ffc801]">Auto</span>Parts
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
        <CustomLink open={open} setOpen={setOpen} className="my-5" to="/">
          Home
        </CustomLink>
        <CustomLink className="my-5" to="/blog">
          blog
        </CustomLink>
        <CustomLink className="my-5" to="/contact">
          Contact
        </CustomLink>
        <div className="flex flex-col lg:flex-row lg:ml-14">
          <CustomLink className="my-5" to="/signin">
            Sign In
          </CustomLink>
          <CustomLink className="my-5" to="/signup">
            about
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
