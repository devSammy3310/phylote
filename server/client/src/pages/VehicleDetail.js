import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VehicleDetail() {
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/vehicles/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("response error was not ok");
        }
        return res.json();
      })
      .then((vehicle) => {
        setVehicle(vehicle);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading......</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!vehicle) {
    return <h2>Vehicle not found</h2>;
  }

  return (
    <div className="vehicle-detail">
      <h1>{vehicle.name}</h1>
      <img src={vehicle.image} alt={vehicle.name} />
      <p>{vehicle.description}</p>
      <h3>Specifications:</h3>
      <ul>
        <li>Weight: {vehicle.specs.weight}</li>
        <li>Engine: {vehicle.specs.engine}</li>
        <li>Armor: {vehicle.specs.armor}</li>
      </ul>
    </div>
  );
}

export default VehicleDetail;
