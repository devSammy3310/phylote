import React, { useEffect, useState } from "react";

function SideBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
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

      <div className={`sidebar ${isChecked ? "slide" : ""}`}>
        <div className="nav-NameLogo sidebar__logo">
          <img
            className="navLogo"
            src="/img/phylote_logo-main.jpg"
            alt="Logo"
          />
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
            <a
              className="navigation__link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleSubMenu();
              }}
            >
              Armored Vehicles
              <span
                className={`submenu-indicator ${isSubMenuOpen ? "open" : ""}`}
              >
                ▼
              </span>
            </a>
            {isSubMenuOpen && (
              <div className="sub-menu open">
                <a
                  className="sub-menu__link"
                  href="/armored-vehicles/all-armored-vehicles"
                >
                  All Armored Vehicles
                </a>
                <a
                  className="sub-menu__link"
                  href="/armored-vehicles/police-government"
                >
                  Police & Government
                </a>
                <a
                  className="sub-menu__link"
                  href="/armored-vehicles/fire-rescue"
                >
                  Fire & Rescue
                </a>
                <a
                  className="sub-menu__link"
                  href="/armored-vehicles/military-armored"
                >
                  Military Armored
                </a>
              </div>
            )}
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
