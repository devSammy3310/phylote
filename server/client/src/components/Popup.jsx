import React from "react";
import Carousel from "./carousel";
import { homepageCarousel } from "../data/vehicles_data";

function Popup({ ID, image, name, details, features, specs, close_ref }) {
  return (
    <div className="popup" id={`popup-${ID}`}>
      <div class="popup__close_container">
        {close_ref && (
          <a href={`#${close_ref}`} className="popup__close">
            &times;
          </a>
        )}
      </div>

      <div className="popup__content">
        <div className="popup__left">
          {image && <Carousel images={image} type="Fade" />}

          {specs && specs.length > 0 && (
            <div class="popup__specs-container">
              <h2 className="heading-secondary">specifications</h2>

              <ul className="popup__list-specs">
                {specs.map((specs, index) => (
                  <li className="popup__item specs__list" key={index}>
                    <div class="specs">{specs.spec}</div>
                    <div class="value">{specs.value}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="popup__right">
          {details && (
            <div class="popup__details-container">
              {name && (
                <h2 className="heading-secondary u-margin-bottom-small">
                  {name}
                </h2>
              )}
              <p className="popup__text">{details}</p>
            </div>
          )}

          {features && features.length > 0 && (
            <div class="popup__features-container">
              <h2 className="heading-secondary">Features</h2>
              <ul className="popup__list">
                {features.map((feature, index) => (
                  <li className="popup__item" key={index}>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="popup__button u-text-center btn btn-green btn--round"
              >
                Get a Quote
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
