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
      fetch("https://phylote.onrender.com/vehicles/all-armored-vehicles").then(
        (res) => res.json()
      ),
      fetch("https://phylote.onrender.com/vehicles/police-government").then(
        (res) => res.json()
      ),
      fetch("https://phylote.onrender.com/vehicles/fire-rescue").then((res) =>
        res.json()
      ),
      fetch("https://phylote.onrender.com/vehicles/military-armored").then(
        (res) => res.json()
      ),
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
          <div class="vehicles__page-intro">
            <h1>Unyielding Protection, Tailored for Every Mission.</h1>
            <p>
              Explore our comprehensive lineup of armored vehicles, crafted to
              meet the unique demands of law enforcement, emergency response,
              military operations, and personal security. Each vehicle in our
              collection combines cutting-edge technology, advanced ballistic
              protection, and unmatched reliability, ensuring safety and
              performance in every scenario. From the rugged strength of our
              armored trucks to the discreet elegance of our sedans and the
              tactical versatility of our police vehicles, our lineup is
              designed with one goal in mind: to keep you and those you protect
              safe. Whether you need secure transportation, emergency response
              capabilities, or battlefield readiness, we have the vehicle to
              suit your needs. Discover the Future of Armored Mobility.
            </p>
          </div>
          <h2>View Our Complete Lineup Below</h2>
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
          <div class="vehicles__page-intro">
            <h1>Defend. Protect. Respond.</h1>
            <p>
              When every second counts, our police and government armored
              vehicles provide the reliability and resilience needed to tackle
              high-risk situations. Trusted by federal, state, and local law
              enforcement agencies, these vehicles offer robust protection for
              officers and personnel during critical operations such as active
              shooter responses, high-risk arrests, and disaster relief. Built
              for durability and adaptability, our armored vehicles can be
              configured for specialized missions like bomb detection, tactical
              rescue, and counter-terrorism operations, ensuring that your team
              is always prepared, no matter the threat.
            </p>
          </div>
          <h2>The Police & Government Armored Vehicles Lineup</h2>
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
          <div class="vehicles__page-intro">
            <h1>Respond. Rescue. Protect.</h1>
            <p>
              Specialized for emergency situations, our fire and rescue armored
              vehicles provide unmatched safety and dependability for first
              responders. Designed to endure hazardous conditions, these
              vehicles are ideal for disaster response, wildfire containment,
              and urban rescue missions. With integrated fire suppression
              systems and enhanced ballistic protection, they enable crews to
              operate effectively in the most dangerous scenarios while ensuring
              the safety of personnel and civilians alike.
            </p>
          </div>
          <h2>Fire & Rescue Armored Vehicles Lineup</h2>
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
          <div class="vehicles__page-intro">
            <h1>Lead. Defend. Dominate.</h1>
            <p>
              Purpose-built for the battlefield, our military armored vehicles
              deliver superior protection, mobility, and firepower. Engineered
              to meet the rigorous demands of modern warfare, they are trusted
              by armed forces worldwide for troop transport, reconnaissance, and
              tactical missions. Equipped with advanced armor and customizable
              weapon systems, these vehicles ensure mission success while
              safeguarding soldiers in the most challenging environments.
            </p>
          </div>
          <h2>Military Armored Vehicles Lineup</h2>
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
