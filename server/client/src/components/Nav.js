import React, { useEffect, useState } from "react";
import $ from "jquery";

import { Link } from "react-router-dom";

function Nav() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll($(document).scrollTop());

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navScroll = scroll > 50 ? "navbarr navbarr-scrolled" : "navbarr";
  const navLinkScroll = scroll > 50 ? "navLink navLink-scrolled" : "navLink";

  return (
    <section>
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation_item">
              <Link className="navigation__link" to="/weapons">
                Weapons
              </Link>
            </li>
            <li class="navigation_item">
              <Link className="navigation__link" to="/weapons">
                Armored Vehicles
              </Link>
            </li>
            <li class="navigation_item">
              <Link className="navigation__link" to="/weapons">
                About Us
              </Link>
            </li>
            <li class="navigation_item">
              <Link className="navigation__link" to="/weapons">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className={navScroll}>
        <div className="name-logo-container">
          <Link
            className={
              scroll > 50 ? "nav-NameLogo navLink-scrolled " : "nav-NameLogo"
            }
            to="/"
          >
            <img className="navLogo" src="/img/phylote_logo-main.jpg" />
            <h1>PHYLOTE</h1>
          </Link>
        </div>

        <div className="nav-link-container">
          <Link className={` ${navLinkScroll} weapons`} to="/weapons">
            Weapons
          </Link>

          <Link className={` ${navLinkScroll} armored`} to="/armored-vehicles">
            Armored Vehicles
          </Link>

          <Link className={`${navLinkScroll} about`} to="/about">
            About Us
          </Link>

          <Link className={`${navLinkScroll} service`} to="/service">
            Service
          </Link>

          <Link className={` ${navLinkScroll} contact`} to="/contact">
            Contact
          </Link>
          {/* <div className={`${navLinkScroll} country`}>
            <p>
              NIGERIA
              <img
                className="flag"
                src="/img/nigeria-flag.jpg"
                alt="nigeria-flag"
              />
            </p>
          </div> */}
        </div>
      </nav>
    </section>
  );
}

export default Nav;
