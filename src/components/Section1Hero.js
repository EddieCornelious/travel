import React from "react";
import "../styles/Section1Hero.scss";
import LazyLoad from "react-lazyload";

const Section1Hero = () => {
  return (
    <LazyLoad offset={350} height={"100vh"}>
      <div className="section__hero">
        <div className="section__hero__content">
          <h3>
            <q>One of the best places I've ever been to.</q>
          </h3>
          <p>James Bunker, long time customer</p>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Section1Hero;
