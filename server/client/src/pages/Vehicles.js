import React, { useEffect, useState } from "react"; // ES6 js
import { Link } from "react-router-dom";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("/vehicles")
      .then((res) => res.json())
      .then((vehicles) => setVehicles(vehicles));
  }, []);
  console.log(vehicles);

  return (
    <section className="vehicles__page">
      <h1>Our Armored Vehicles</h1>
      {vehicles.map((vehicle) => (
        <ul>
          <li key={vehicle.id}>
            <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
          </li>
        </ul>
      ))}
    </section>
  );
}

export default Vehicles;
