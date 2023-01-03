import React from "react";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-[#f6f7ff]">
      <footer className="footer p-20  flex flex-col lg:flex-row lg:justify-between container mx-auto">
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">Company</span>
          <a href="#home" className="link link-hover">
            Home
          </a>
          <a href="#factories" className="link link-hover">
            Our factories
          </a>
          <a href="#strategy" className="link link-hover">
            Mission and strategy
          </a>
          <a href="#actions" className="link link-hover">
            Charitable actions
          </a>
          <a href="#Environment" className="link link-hover">
            Environment
          </a>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">Production</span>
          <a href="#Technology" className="link link-hover">
            Technology
          </a>
          <a href="#Products" className="link link-hover">
            Products
          </a>
          <a href="#Quality" className="link link-hover">
            Quality
          </a>
          <a href="#geography" className="link link-hover">
            Sales geography
          </a>
          <a href="#customers" className="link link-hover">
            Our customers
          </a>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">OUR ADDRESS</span>
          <div className="grid grid-flow-col gap-4">
            <div className="flex flex-col">
              <a href="#address" className="flex items-center mb-3">
                <FaHome className="text-lg mr-2 text-red-600" /> 58 A, Mirpur
                12, Dhaka
              </a>
              <a href="#phone" className="flex items-center mb-3">
                {" "}
                <BsFillTelephoneFill className="text-lg mr-2 text-red-600" />
                +91 12345678
              </a>
              <a href="#email" className="flex items-center mb-3">
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
