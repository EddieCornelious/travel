import React from "react";
import "../styles/ResponsiveNav.scss";

const ResponsiveNav = () => {
  return (
    <div style={{ height: 0 }}>
      <nav style={{ height: 0 }} role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul id="menu">
            <li href="#">
              <a href="#">Home</a>
            </li>

            <li href="#">
              <a href="#">About</a>
            </li>

            <li href="#">
              <a href="#">Drinks</a>
            </li>

            <li href="#">
              <a href="#">Meals</a>
            </li>

            <li href="#">
              <a href="#">Show me more</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ResponsiveNav;
