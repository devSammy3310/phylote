import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { all_armored_vehicles } from "../data/vehicles_data";
import Card from "../components/Card";
import Popup from "../components/Popup";

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
          {all_armored_vehicles.map((vehicle) => (
            <Card
              name={vehicle.name}
              image={vehicle.image[0].src}
              ID={vehicle.ID}
              details={vehicle.details.trim().substring(0, 280) + "..."}
            />
          ))}

          {all_armored_vehicles.map((vehicle) => (
            <Popup
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
        <div class="contact__page">
          <div class="contact__page-details">
            <h1 class="contact__page-details--header heading-secondary">Contact Us</h1>
          </div>
          <div class="contact__page-form"></div>
        </div>
      </>
    );
  } else {
    return <h1>Page not found</h1>;
  }
}

export default AppLayout;
