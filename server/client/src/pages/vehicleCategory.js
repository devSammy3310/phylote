import React from "react";
import { Link } from "react-router-dom";

function VehicleCategory({ ID }) {
  return (
    <section className="vehicles__page-section-vehicle__category">
      {/* <p className="vehicle__category-header">
        Each vehicle category is crafted to exceed expectations, ensuring safety
        without compromising on performance. Discover how Phylote Nigeria
        Limited can tailor these solutions to your unique needs!
      </p> */}
      <div className="categories">
        {/* All Armored Vehicles */}
        <Link className="link" to="/armored-vehicles/all-armored-vehicles">
          <div
            className={`feature-box ${
              ID === "all-armored-vehicles" ? "card-shadow" : ""
            } feature-box--1`}
          >
            <svg className="icon icon-shield1">
              <use href="/sprite.svg#icon-shield1" />
            </svg>
            <h4>All Armored</h4>
            <p>Vehicles</p>
          </div>
        </Link>

        {/* Police & Government */}
        <Link className="link" to="/armored-vehicles/police-government">
          <div
            className={`feature-box ${
              ID === "police-government" ? "card-shadow" : ""
            } feature-box--2`}
          >
            <svg className="icon icon-shield1">
              <use href="/sprite.svg#icon-shield1" />
            </svg>
            <h4>Police & Government</h4>
            <p>Vehicles</p>
          </div>
        </Link>

        {/* Fire & Rescue */}
        <Link className="link" to="/armored-vehicles/fire-rescue">
          <div
            className={`feature-box ${
              ID === "fire-rescue" ? "card-shadow" : ""
            } feature-box--3`}
          >
            <svg className="icon icon-shield3">
              <use href="/sprite.svg#icon-shield3" />
            </svg>
            <h4>Fire & Rescue</h4>
            <p>Vehicles</p>
          </div>
        </Link>

        {/* Military Armored */}
        <Link className="link" to="/armored-vehicles/military-armored">
          <div
            className={`feature-box ${
              ID === "military-armored" ? "card-shadow" : ""
            } feature-box--4`}
          >
            <svg className="icon icon-shield2">
              <use href="/sprite.svg#icon-shield2" />
            </svg>
            <h4>Military Armored</h4>
            <p>Vehicles</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default VehicleCategory;
