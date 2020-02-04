import React from "react";
import "../styles/Section1Hero.scss";
import Fade from "react-reveal/Fade";

const Section1Hero = () => {
  return (
    <div className="section__hero">
      <div className="section__hero__content">
        <h3>
          <q>One of the best places I've ever been to.</q>
        </h3>
        <p>James Bunker, long time customer</p>
      </div>
    </div>
  );
};

export default Section1Hero;
