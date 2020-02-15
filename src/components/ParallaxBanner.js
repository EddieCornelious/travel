import React from "react";
import "../styles/ParallaxBanner.scss";
import LazyLoad from "react-lazyload";

const ParallaxBanner = props => {
  return (
    <LazyLoad offset={100}>
      <div className={"parallax__banner banner" + props.id}>
        <h1 className="parallax__banner__text">{props.title}</h1>
      </div>
    </LazyLoad>
  );
};

export default ParallaxBanner;
