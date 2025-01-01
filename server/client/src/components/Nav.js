import React, { useEffect, useState } from "react";
import $ from "jquery";

import { Link } from "react-router-dom";
import SideBar from "./SideBar";

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
      <nav className={navScroll}>
        <SideBar />
        <div className="name-logo-container">
          <Link
            className={scroll > 50 ? "nav-NameLogo " : "nav-NameLogo"}
            to="/"
          >
            <img className="navLogo" src="/img/phylote_logo-main.jpg" />
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
