import React from "react";
import "../styles/Footer.scss";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <h4 className="">Manuels's, 74 5TH AVENUE, Queens, NY</h4>
        <Fade right>
          <p className="">© 2018 Manuel's. All rights reserved</p>
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
