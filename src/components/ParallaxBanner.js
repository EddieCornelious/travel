import React from "react";
import "../styles/ParallaxBanner.scss";

const ParallaxBanner = props => {
  return (
    <div className={"parallax__banner banner" + props.id}>
      <h1 className="parallax__banner__text">{props.title}</h1>
    </div>
  );
};

export default ParallaxBanner;
