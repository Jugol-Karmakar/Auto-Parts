import React from "react";
import car from "../../../images/car.jpg";
import herobg from "../../../images/herobg.jpg";
import Button from "../../Shared/Button/Button";

const Hero = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        background: `url(${car})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div class="hero-overlay bg-opacity-70"></div>
      <div class="hero-content justify-self-start  px-10">
        <div class="text-left max-w-3xl">
          <h1 class="mb-5 text-5xl font-bold text-white">
            AUTO & <span className="text-yellow-500">CAR PARTS STORE</span>
          </h1>
          <p class="mb-5 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Purchase Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
