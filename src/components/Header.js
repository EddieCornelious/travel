import React from "react";
import "../styles/Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    return (
      <div className="header">
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
    );
  }
}

export default Header;
