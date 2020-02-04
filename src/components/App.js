import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.scss";
import React from "react";
import MainSection from "./MainSection.js";
import WelcomeSection from "./WelcomeSection.js";
import MainMenuSection from "./MainMenuSection.js";
import DessertSection from "./DessertSection.js";
import DrinkSection from "./DrinkSection.js";
import Reservation from "./Reservation.js";
import Footer from "./Footer.js";
import OrderSection from "./OrderSection.js";
import debounce from "lodash.debounce";
import Section1Hero from "./Section1Hero.js";
import ResponsiveNav from "./ResponsiveNav.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    window.onscroll = debounce(() => {
      var elementTarget = document.querySelector(".main__section");
      if (
        window.scrollY >
        elementTarget.offsetTop + elementTarget.offsetHeight
      ) {
        document.querySelector(".scroll__header.alt").style.display = "block";
      } else {
        document.querySelector(".scroll__header.alt").style.display = "none";
      }
    }, 100);
  }
  render() {
    return (
      <div>
        <div className="scroll__header alt">
          <div className="container">
            <ul className="_nav__wrap">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#drinks">Drinks</a>
              </li>
              <li>
                <a href="#main">Meals</a>
              </li>
            </ul>
          </div>
        </div>
        <ResponsiveNav />
        <MainSection />
        <WelcomeSection />
        <Section1Hero />
        <MainMenuSection />
        <DessertSection />
        <DrinkSection />
        <OrderSection />
        <Reservation />
        <Footer />
      </div>
    );
  }
}

export default App;
