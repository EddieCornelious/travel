import React from "react";
import "../styles/WelcomeSection.scss";
import Fade from "react-reveal/Fade";
import img1 from "../images/manuels_outside.jpg";

const WelcomeSection = () => {
  return (
    <div className="welcome__section">
      <div className="container">
        <div className="welcome__section__left">
          <div className="col-xs-12">
            <h2>Manuel's Bar and Grill</h2>
            <p>
              With its rustic interior, pops of bright color and welcoming
              atmosphere, Manuel's is a bar and grill in the heart of Queens
              that encapsulates a vibrant culinary culture born from luxury.
              Visitors will feel comfortable and engaged with our world renowned
              chefs and service.
            </p>
            <div className="icon__wrap">
              <i className="fas fa-utensils" />
            </div>
          </div>
        </div>

        <div className="welcome__section__right">
          <div className="col-xs-12">
            <img src={img1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
