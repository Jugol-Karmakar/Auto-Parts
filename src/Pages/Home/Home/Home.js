import React from "react";
import Business from "../Business/Business";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Parts></Parts>
      <Reviews></Reviews>
      <Business></Business>
      <Contact></Contact>
    </div>
  );
};

export default Home;
