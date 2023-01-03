import React from "react";
import CountUp from "react-countup";
import { FaTools, FaUsers } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Business = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="w-full mt-10 p-20 opacity-75 bg-white">
        <h1 className="text-5xl font-black text-gray-800 text-center my-2 drop-shadow-md">
          MILLION BUSINESS TRUST US
        </h1>
        <p className="text-center text-lg font-bold text-sky-600">
          TRY TO UNDERSTAND USERS EXPECTATION
        </p>
        <div className="container mx-auto px-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div className="text-center">
            <FaUsers className="text-center inline-block text-6xl text-blue-700 my-3"></FaUsers>
            <h2 className="text-5xl font-extrabold my-2 text-gray-900">
              {counterOn && (
                <CountUp start={0} end={200} duration={2} delay={0}></CountUp>
              )}
              +
            </h2>
            <h3 className="text-xl font-semibold my-2 text-blue-700">
              Customers served
            </h3>
          </div>
          <div className="text-center">
            <BsGraphUp className="text-center inline-block text-6xl text-blue-700 my-3"></BsGraphUp>
            <h2 className="text-5xl font-extrabold my-2 text-gray-900">
              {counterOn && (
                <CountUp start={0} end={195} duration={2} delay={0}></CountUp>
              )}
              +
            </h2>
            <h3 className="text-xl font-semibold my-2 text-blue-700">
              Annual Revenue
            </h3>
          </div>
          <div className="text-center">
            <MdReviews className="text-center inline-block text-6xl text-blue-700 my-3"></MdReviews>
            <h2 className="text-5xl font-extrabold my-2 text-gray-900">
              {counterOn && (
                <CountUp start={0} end={126} duration={2} delay={0}></CountUp>
              )}
              +
            </h2>
            <h3 className="text-xl font-semibold my-2 text-blue-700">
              Customers Reviews
            </h3>
          </div>
          <div className="text-center">
            <FaTools className="text-center inline-block text-6xl text-blue-700 my-3"></FaTools>
            <h2 className="text-5xl font-extrabold my-2 text-gray-900">
              {counterOn && (
                <CountUp start={0} end={140} duration={2} delay={0}></CountUp>
              )}
              +
            </h2>
            <h3 className="text-xl font-semibold my-2 text-blue-700">
              Parts/Tools
            </h3>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Business;
