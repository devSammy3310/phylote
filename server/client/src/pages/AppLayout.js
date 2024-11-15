import React, { useEffect, useState } from "react"; // ES6 js
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import mostUsedVehicles from "../data/vehicles_data";
import Card from "../components/Card";

function AppLayout() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("/vehicles")
      .then((res) => res.json())
      .then((vehicles) => setVehicles(vehicles));
  }, []);
  console.log(vehicles);

  const { id } = useParams();

  if (id == "weapons") {
    return (
      <div>
        <PageHeader logo="/img/phylote_logo-main.jpg" />
        <h1>Our weapons</h1>
      </div>
    );
  } else if (id == "armored-vehicles") {
    return (
      <section className="vehicles__page">
        <PageHeader logo="/img/phylote_logo-main.jpg" />
        
        <div className="vehicles__page--all-armored-vehicles">
          {mostUsedVehicles.map((vehicle) => (
            <Card
              name={vehicle.name}
              image={vehicle.image[0].src}
              ID={vehicle.ID}
              details={vehicle.details.trim().substring(0, 280) + "..."}
            />
          ))}
        </div>
      </section>
    );
  } else if (id == "about") {
    return (
      <>
        <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
        <h1>About</h1>
      </>
    );
  } else if (id == "contact") {
    return (
      <>
        <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />{" "}
        <h1>Contact</h1>
      </>
    );
  } else {
    return <h1>Page not found</h1>;
  }
}

export default AppLayout;
