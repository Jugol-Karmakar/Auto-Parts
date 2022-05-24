import React from "react";
import { FaHome, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImGooglePlus, ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-[#f6f7ff]">
      <footer className="footer p-20  flex flex-col lg:flex-row lg:justify-between container mx-auto">
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">Company</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Our factories</a>
          <a className="link link-hover">Mission and strategy</a>
          <a className="link link-hover">Charitable actions</a>
          <a className="link link-hover">Environment</a>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">Production</span>
          <a className="link link-hover">Technology</a>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Quality</a>
          <a className="link link-hover">Sales geography</a>
          <a className="link link-hover">Our customers</a>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">OUR ADDRESS</span>
          <div className="grid grid-flow-col gap-4">
            <div className="flex flex-col">
              <a className="flex items-center mb-3">
                <FaHome className="text-lg mr-2 text-red-600" /> 58 A, Mirpur
                12, Dhaka
              </a>
              <a className="flex items-center mb-3">
                {" "}
                <BsFillTelephoneFill className="text-lg mr-2 text-red-600" />
                +91 12345678
              </a>
              <a className="flex items-center mb-3">
                <MdEmail className="text-lg mr-2 text-red-600" />
                autopart@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center p-6">
        <div>
          <p className="text-sm">
            Copyright © {year} - All right reserved.{" "}
            <strong className="text-green-600">Auto Parts</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
