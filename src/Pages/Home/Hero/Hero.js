import React from "react";
import car from "../../../images/car.jpg";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        background: `url(${car})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content justify-self-start  px-10">
        <div className="text-left max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold text-white">
            AUTO & <span className="text-[#ffc801]">CAR PARTS STORE</span>
          </h1>
          <p className="mb-5 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-blue-600 px-8 rounded-full border-0 font-bold  hover:bg-blue-700">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
