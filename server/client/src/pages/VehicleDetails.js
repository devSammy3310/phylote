import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Carousel from "../components/carousel";
import VehicleCategory from "./vehicleCategory";
import Popup from "../components/Popup";
import { all_armored_vehicles } from "../data/vehicles_data";
import Card from "../components/Card";

function VehicleDetails() {
  const [vehicle, setVehicle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/vehicles/${id}`)
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
    </section>
  );
}

export default VehicleDetails;