import React from "react";
import Business from "../Business/Business";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import NewsLetter from "../NewsLetter/NewsLetter";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Parts isHome></Parts>
      <Reviews></Reviews>
      <Business></Business>
      <Contact></Contact>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
