import React from "react";
import { Link } from "react-router-dom";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box ">
        <img src="/img/phylote_logo-main.jpg" alt="" className="footer__logo" />
      </div>

      <div className="footer__main-box-container">
        <div className="footer__main-box footer__main-box--2">
          <h1 className="footer__header">quick links</h1>
          <div className="footer__vehicle-range">
            <ul className="footer__list">
              <li className="footer__item">
                <Link className="footer__link" to={"/"}>
                  home
                </Link>
              </li>

              <li className="footer__item">
                <Link className="footer__link" to={"/weapons"}>
                  weapons
                </Link>
              </li>

              <li className="footer__item">
                <Link
                  className="footer__link"
                  to={"/armored-vehicles/all-armored-vehicles"}
                >
                  armored Vehicles
                </Link>
              </li>

              <li className="footer__item">
                <Link className="footer__link" to={"/about"}>
                  about us
                </Link>
              </li>

              <li className="footer__item">
                <Link className="footer__link" to={"/contact"}>
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__main-box footer__main-box--3">
          <h1 className="footer__header">contact us</h1>
          <div className="footer__vehicle-range">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="tel:+2348068444195" className="footer__link">
                  <FontAwesomeIcon className="footer__icon" icon={faPhone} />
                  +2348068444195
                </a>
              </li>

              <li className="footer__item">
                <a
                  href="mailto:adedotun.bademosi@phyloteng.com"
                  className="footer__link"
                >
                  <FontAwesomeIcon className="footer__icon" icon={faEnvelope} />
                  adedotun.bademosi@phyloteng.com
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="mailto:kehinde.bademosi@phyloteng.com"
                  className="footer__link"
                >
                  <FontAwesomeIcon className="footer__icon" icon={faEnvelope} />
                  kehinde.bademosi@phyloteng.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__main-box-container--2">
        <div class="footer__copyright">
          <div className="nav-NameLogo ">
            <img className="navLogo" src="/img/phylote_logo-main.jpg" />
            <h1>PHYLOTE</h1>
          </div>

          <p>
            &copy; 2024 Phylote&reg; armored vehicle manufacturing. All Rights
            Reserved.
          </p>
        </div>
        <div class="footer__socials">
          <a
            href="https://www.facebook.com/profile.php?id=61571773372769"
            className="footer__socials-link"
          >
            <div class="svg__container">
              <svg className="footer__socials-icon">
                <use href="/codeCrafterX.svg#icon-facebook"></use>
              </svg>
            </div>
          </a>

          {/* <a href="" className="footer__socials-link">
            <div class="svg__container">
              <svg className="footer__socials-icon">
                <use href="/codeCrafterX.svg#icon-youtube"></use>
              </svg>
            </div>
          </a> */}

          {/* <a href="" className="footer__socials-link">
            <div class="svg__container">
              <svg className="footer__socials-icon">
                <use href="/codeCrafterX.svg#icon-twitter-x"></use>
              </svg>
            </div>
          </a> */}

          <a
            href="https://www.instagram.com/phyloteng?igsh=ZnMwNjZvdTJlMjY4"
            className="footer__socials-link"
          >
            <div class="svg__container">
              <svg className="footer__socials-icon">
                <use href="/codeCrafterX.svg#icon-instagram"></use>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
