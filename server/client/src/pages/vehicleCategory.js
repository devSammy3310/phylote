import React from "react";
import { Link } from "react-router-dom";

function VehicleCategory() {
  return (
    <section className="vehicles__page-section-vehicle__category">
      <div className="categories">
        <Link className="link" to="/armored-vehicles/all-armored-vehicles">
          <div className="feature-box feature-box--1">
            <svg className="icon icon-shield1">
              <use href="/sprite.svg#icon-shield1" />
            </svg>
            <h4>All Armored</h4>
            <p>Vehicles</p>
          </div>
        </Link>

        <Link className="link" to="/armored-vehicles/police-government">
        <div className="feature-box feature-box--1">
          <svg className="icon icon-shield1">
            <use href="/sprite.svg#icon-shield1" />
          </svg>
          <h4>Police & Government</h4>
          <p>Vehicles</p>
        </div>
        </Link>

        <Link className="link" to="/armored-vehicles/fire-rescue">
        <div className="feature-box feature-box--2">
          <svg className="icon icon-shield3">
            <use href="/sprite.svg#icon-shield3"></use>
          </svg>
          <h4>Fire & Rescue</h4>
          <p>Vehicles</p>
        </div>
        </Link>

    <Link className="link" to="/armored-vehicles/military-armored">
        <div className="feature-box feature-box--3">
          <svg className="icon icon-shield2">
            <use href="/sprite.svg#icon-shield2"></use>
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
