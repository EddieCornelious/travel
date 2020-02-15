import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.scss";
import React from "react";
import debounce from "lodash.debounce";
import MainSection from "./MainSection.js";
import ResponsiveNav from "./ResponsiveNav.js";

const WelcomeSection = React.lazy(() => import("./WelcomeSection.js"));
const MainMenuSection = React.lazy(() => import("./MainMenuSection.js"));
const DessertSection = React.lazy(() => import("./DessertSection.js"));
const DrinkSection = React.lazy(() => import("./DrinkSection.js"));
const Reservation = React.lazy(() => import("./Reservation.js"));
const Footer = React.lazy(() => import("./Footer.js"));
const OrderSection = React.lazy(() => import("./OrderSection.js"));
const Section1Hero = React.lazy(() => import("./Section1Hero.js"));

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
        <React.Suspense fallback={<div>Loading...</div>}>
          <WelcomeSection />
          <Section1Hero />
          <MainMenuSection />
          <DessertSection />
          <DrinkSection />
          <OrderSection />
          <Reservation />
          <Footer />
        </React.Suspense>
      </div>
    );
  }
}

export default App;
