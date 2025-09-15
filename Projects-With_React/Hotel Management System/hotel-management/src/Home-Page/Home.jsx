import React from "react";
import Hero from "../Components/Hero/Hero";
import "../Components/Hero/Hero.css";
import WhyChooseGashuna from "../Components/What makes our hotel/WhyChooseGashuna";

function Home() {
  return (
    <div className="hero">
      <Hero></Hero>
<WhyChooseGashuna></WhyChooseGashuna>
    </div>
  );
}

export default Home;
