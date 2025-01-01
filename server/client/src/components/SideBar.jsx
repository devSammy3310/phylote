import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <label className="sidebar-container">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <div className="toggle">
          <span className="top_line common"></span>
          <span className="middle_line common"></span>
          <span className="bottom_line common"></span>
        </div>
      </label>

      <div className={`sidebar  ${isChecked ? "slide" : ""}`}>
        <div className="nav-NameLogo ">
          <img className="navLogo" src="/img/phylote_logo-main.jpg" />
          <h1>PHYLOTE</h1>
        </div>
        <div className="navigation__list">
          <div className="navigation_item">
            <a className="navigation__link" href="/">
              Home
            </a>
          </div>

          <div className="navigation_item">
            <a className="navigation__link" href="/weapons">
              Weapons
            </a>
          </div>
          <div className="navigation_item">
            <a className="navigation__link" href="/vehicles">
              Armored Vehicles
            </a>
          </div>
          <div className="navigation_item">
            <a className="navigation__link" href="/about">
              About Us
            </a>
          </div>
          <div className="navigation_item">
            <a className="navigation__link" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
