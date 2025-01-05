import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Carousel from "../components/carousel";
import { Form } from "../components/Form";
import VehicleCategory from "./vehicleCategory";
import Popup from "../components/Popup";
import { all_armored_vehicles } from "../data/vehicles_data";
import Card from "../components/Card";

function VehicleDetails() {
  const [vehicle, setVehicle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://phylote.onrender.com/vehicles/${id}`)
      .then((res) => res.json())
      .then((vehicle) => {
        setVehicle(vehicle);
      });
  }, [id]);

  // Show a loading spinner or fallback if the vehicle data isn't ready yet
  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <section className="vehicle__details">
      <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />

      <div class="vehicle__details-container">
        <div className="vehicle__details-carousel">
          {" "}
          <Carousel images={vehicle.image} type="Fade" />
        </div>

        <div className="vehicle__details-info margin-bottom-med">
          <p className="vehicle__details-text">{vehicle.details}</p>
        </div>

        <div class="vehicle__details-features margin-bottom-med">
          <h2 className="heading-secondary margin-bottom-small">Features</h2>
          <ul className="vehicle__details-feature-list">
            {vehicle.features.map((feature, index) => (
              <li className="list-item" key={index}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div class="vehicle__details-specs">
          <h2 className="heading-secondary margin-bottom-small">
            specifications
          </h2>

          <ul className="vehicle__details-specs-list">
            {vehicle.specifications.map((specs, index) => (
              <li className="list-item list-item-grid" key={index}>
                <div class="specs">{specs.spec}</div>
                <div class="value">{specs.value}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="contact__page-form">
        <div className="form-instruction">
          <p>
            If you're interested in this vehicle or have any questions,
          </p>
        </div>
        <Form />
      </div>

      <div class="shortcuts"></div>
    </section>
  );
}

export default VehicleDetails;
