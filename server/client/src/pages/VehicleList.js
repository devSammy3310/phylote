import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import VehicleCategory from "./vehicleCategory";
import Popup from "../components/Popup";
import { all_armored_vehicles } from "../data/vehicles_data";
import Card from "../components/Card";

function VehicleList() {
  const [allVehicles, setallVehicles] = useState([]);
  const [policeGovernment, setPoliceGovernment] = useState([]);
  const [fireRescue, setFireRescue] = useState([]);
  const [militaryArmored, setMilitaryArmored] = useState([]);
  const { id } = useParams();

  // Fetch vehicles on mount
  useEffect(() => {
    Promise.all([
      fetch("/vehicles/all-armored-vehicles").then((res) => res.json()),
      fetch("/vehicles/police-government").then((res) => res.json()),
      fetch("/vehicles/fire-rescue").then((res) => res.json()),
      fetch("/vehicles/military-armored").then((res) => res.json()),
    ]).then(([vehicles, policeGovernment, fireRescue, militaryArmored]) => {
      setallVehicles(vehicles);
      setPoliceGovernment(policeGovernment);
      setFireRescue(fireRescue);
      setMilitaryArmored(militaryArmored);
    });
  }, []);

  switch (id) {
    case "all-armored-vehicles":
      return (
        <section className="vehicles__page">
          <PageHeader logo="/img/phylote_logo-main.jpg" />
          <VehicleCategory ID={id} />;
          <div className="vehicles__page--all-armored-vehicles">
            {/* Map armored vehicles */}
            {allVehicles.map((vehicle) => (
              <Card
                key={vehicle.ID}
                name={vehicle.name}
                image={vehicle.image[0].src}
                ID={vehicle.ID}
                details={vehicle.details.trim().substring(0, 280) + "..."}
              />
            ))}

            {/* Popups */}
            {allVehicles.map((vehicle) => (
              <Popup
                key={vehicle.ID}
                ID={vehicle.ID}
                image={vehicle.image}
                name={vehicle.name}
                details={vehicle.details}
                features={vehicle.features}
                specs={vehicle.specifications}
                close_ref={vehicle.ID}
              />
            ))}
          </div>
        </section>
      );

    case "police-government":
      return (
        <section className="vehicles__page">
          <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
          <VehicleCategory ID={id} />;
          <div className="vehicles__page--all-armored-vehicles">
            {/* Map armored vehicles */}
            {policeGovernment.map((vehicle) => (
              <Card
                key={vehicle.ID}
                name={vehicle.name}
                image={vehicle.image[0].src}
                ID={vehicle.ID}
                details={vehicle.details.trim().substring(0, 280) + "..."}
              />
            ))}

            {/* Popups */}
            {policeGovernment.map((vehicle) => (
              <Popup
                key={vehicle.ID}
                ID={vehicle.ID}
                image={vehicle.image}
                name={vehicle.name}
                details={vehicle.details}
                features={vehicle.features}
                specs={vehicle.specifications}
                close_ref={vehicle.ID}
              />
            ))}
          </div>
        </section>
      );

    case "fire-rescue":
      return (
        <section className="vehicles__page">
          <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
          <VehicleCategory ID={id} />;
          <div className="vehicles__page--all-armored-vehicles">
            {/* Map armored vehicles */}
            {fireRescue.map((vehicle) => (
              <Card
                key={vehicle.ID}
                name={vehicle.name}
                image={vehicle.image[0].src}
                ID={vehicle.ID}
                details={vehicle.details.trim().substring(0, 280) + "..."}
              />
            ))}

            {/* Popups */}
            {fireRescue.map((vehicle) => (
              <Popup
                key={vehicle.ID}
                ID={vehicle.ID}
                image={vehicle.image}
                name={vehicle.name}
                details={vehicle.details}
                features={vehicle.features}
                specs={vehicle.specifications}
                close_ref={vehicle.ID}
              />
            ))}
          </div>
        </section>
      );

    case "military-armored":
      return (
        <section className="vehicles__page">
          <PageHeader logo="/img/phylote_logo-main.jpg" />
          <VehicleCategory ID={id} />;
          <div className="vehicles__page--all-armored-vehicles">
            {/* Map armored vehicles */}
            {militaryArmored.map((vehicle) => (
              <Card
                key={vehicle.ID}
                name={vehicle.name}
                image={vehicle.image[0].src}
                ID={vehicle.ID}
                details={vehicle.details.trim().substring(0, 280) + "..."}
              />
            ))}

            {/* Popups */}
            {militaryArmored.map((vehicle) => (
              <Popup
                key={vehicle.ID}
                ID={vehicle.ID}
                image={vehicle.image}
                name={vehicle.name}
                details={vehicle.details}
                features={vehicle.features}
                specs={vehicle.specifications}
                close_ref={vehicle.ID}
              />
            ))}
          </div>
        </section>
      );
  }
}

export default VehicleList;
