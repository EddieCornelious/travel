import React from "react";
import "../styles/Reservation.scss";
import RubberBand from "react-reveal/RubberBand";

const Reservation = () => {
  return (
    <section className="reservation">
      <h3>Reservation</h3>
      <p>(818)-443-5567 for details</p>
      <RubberBand>
        <a className="wow rubberBand" href="#">
          Reserve Now
        </a>
      </RubberBand>
    </section>
  );
};

export default Reservation;
