import React from "react";
import "../styles/MainSection.scss";
import Header from "./Header.js";
import Logo from "./Logo.js";

class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="main__section">
        <Logo />
        <Header />

        <div className="main__section__content">
          <h1>The best food in the city</h1>

          <h2>Cooking is our passion</h2>
        </div>
      </section>
    );
  }
}

export default MainSection;
