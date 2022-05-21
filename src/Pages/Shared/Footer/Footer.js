import React from "react";
import { FaHome, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImGooglePlus, ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-base-300">
      <footer className="footer p-20  flex flex-col lg:flex-row lg:justify-between container mx-auto">
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">OUR ADDRESS</span>
          <div className="grid grid-flow-col gap-4">
            <div className="flex flex-col">
              <a className="flex items-center mb-3">
                <FaHome className="text-lg mr-2 text-cyan-600" /> 58 A, East
                Madison Street, Baltimore
              </a>
              <a className="flex items-center mb-3">
                {" "}
                <BsFillTelephoneFill className="text-lg mr-2 text-cyan-600" />
                +91 12345678
              </a>
              <a className="flex items-center mb-3">
                <MdEmail className="text-lg mr-2 text-cyan-600" />
                support@somemail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center p-6">
        <div>
          <p className="text-sm">
            Copyright © {year} - All right reserved.{" "}
            <strong className="text-cyan-500">Doctor Portal</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
