import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import VehicleCategory from "./vehicleCategory";
import Popup from "../components/Popup";
import Card from "../components/Card";

function VehicleList() {
  const [allVehicles, setAllVehicles] = useState([]);
  const [policeGovernment, setPoliceGovernment] = useState([]);
  const [fireRescue, setFireRescue] = useState([]);
  const [militaryArmored, setMilitaryArmored] = useState([]);
  const { id } = useParams();

  // State for detecting mobile devices
  const [isMobile, setIsMobile] = useState(false);

  // Fetch data on component mount
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
    ]).then(([vehicles, policeGov, fireRes, military]) => {
      setAllVehicles(vehicles);
      setPoliceGovernment(policeGov);
      setFireRescue(fireRes);
      setMilitaryArmored(military);
    });
  }, []);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reusable function to render vehicle sections
  const renderSection = (vehicles, headerText, introText, h2Text) => (
    <section className="vehicles__page">
      <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
      {!isMobile && (
        <div className="vehicles__page-category">
          <VehicleCategory ID={id} />
        </div>
      )}
      <div className="vehicles__page-intro">
        <h1>{headerText}</h1>
        <p>{introText}</p>
      </div>
      <h2>{h2Text}</h2>
      <div className="vehicles__page--all-armored-vehicles">
        {vehicles.map((vehicle) => (
          <Card
            key={vehicle.ID}
            name={vehicle.name}
            image={vehicle.image[0].src}
            ID={vehicle.ID}
            details={vehicle.details.trim().substring(0, 280) + "..."}
          />
        ))}
        {vehicles.map((vehicle) => (
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

  switch (id) {
    case "all-armored-vehicles":
      return renderSection(
        allVehicles,
        "Unyielding Protection, Tailored for Every Mission.",
        "Explore our comprehensive lineup of armored vehicles, crafted to meet the unique demands of law enforcement, emergency response, military operations, and personal security. Each vehicle in our collection combines cutting-edge technology, advanced ballistic protection, and unmatched reliability, ensuring safety and performance in every scenario. From the rugged strength of our armored trucks to the discreet elegance of our sedans and the tactical versatility of our police vehicles, our lineup is designed with one goal in mind: to keep you and those you protect safe. Whether you need secure transportation, emergency response capabilities, or battlefield readiness, we have the vehicle to suit your needs. Discover the Future of Armored Mobility.",
        "View Our Complete Lineup Below"
      );

    case "police-government":
      return renderSection(
        policeGovernment,
        "Defend. Protect. Respond.",
        "When every second counts, our police and government armored vehicles provide the reliability and resilience needed to tackle high-risk situations. Trusted by federal, state, and local law enforcement agencies, these vehicles offer robust protection for officers and personnel during critical operations such as active shooter responses, high-risk arrests, and disaster relief. Built for durability and adaptability, our armored vehicles can be configured for specialized missions like bomb detection, tactical rescue, and counter-terrorism operations, ensuring that your team is always prepared, no matter the threat.",
        "The Police & Government Armored Vehicles Lineup"
      );

    case "fire-rescue":
      return renderSection(
        fireRescue,
        "Respond. Rescue. Protect.",
        "Specialized for emergency situations, our fire and rescue armored vehicles provide unmatched safety and dependability for first responders. Designed to endure hazardous conditions, these vehicles are ideal for disaster response, wildfire containment, and urban rescue missions. With integrated fire suppression systems and enhanced ballistic protection, they enable crews to operate effectively in the most dangerous scenarios while ensuring the safety of personnel and civilians alike.",
        "Fire & Rescue Armored Vehicles Lineup"
      );

    case "military-armored":
      return renderSection(
        militaryArmored,
        "Lead. Defend. Dominate.",
        "Purpose-built for the battlefield, our military armored vehicles deliver superior protection, mobility, and firepower. Engineered to meet the rigorous demands of modern warfare, they are trusted by armed forces worldwide for troop transport, reconnaissance, and tactical missions. Equipped with advanced armor and customizable weapon systems, these vehicles ensure mission success while safeguarding soldiers in the most challenging environments.",
        "Military Armored Vehicles Lineup"
      );

    default:
      return <h1>Page Not Found</h1>;
  }
}

export default VehicleList;
