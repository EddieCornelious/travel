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
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Drinks</li>
            </a>
            <a href="#">
              <li>Meals</li>
            </a>
            <a href="#" target="_blank">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ResponsiveNav;
