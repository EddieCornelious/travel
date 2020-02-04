import "../styles/OrderSection.scss";
import React from "react";

import video from "../images/Manuels.mp4";

const OrderVideo = () => {
  return (
    <div className="container-fluid no-padding">
      <div className="video__wrap">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
        <div className="video__overlay">&nbsp;</div>
        <div className="video__text">
          <h3>Order Now Online</h3>
          <p>
            Coming soon! Have you ever wanted to stay in the luxury of your own
            home while also enjoying one of our exquisite cuisines? Well, soon
            enough you will be able to order online and have your food delivered
            to you in a timely manner! Online orders add no more than 3 dollars
            to your order so not only will our service be convenient, but also
            cost-effective. We look forward to the grand unveiling which will be
            in late 2020 or early 2021!
          </p>
          <a href="#" className="video__btn">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};
const OrderSection = () => {
  return <OrderVideo />;
};

export default OrderSection;
