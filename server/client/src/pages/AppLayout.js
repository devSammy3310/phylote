import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { all_armored_vehicles } from "../data/vehicles_data";
import Card from "../components/Card";
import Popup from "../components/Popup";
import { Form } from "../components/Form";



function AppLayout() {
  const [vehicles, setVehicles] = useState([]);
  const { id } = useParams();

  // Fetch vehicles on mount
  useEffect(() => {
    fetch("/vehicles")
      .then((res) => res.json())
      .then((vehicles) => setVehicles(vehicles))
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, []);

  console.log(vehicles);

  // Render based on the route parameter (id)
  switch (id) {
    case "weapons":
      return (
        <div>
          <PageHeader logo="/img/phylote_logo-main.jpg" />
          <h1>Our Weapons</h1>
        </div>
      );

    case "armored-vehicles":
      return (
        <section className="vehicles__page">
          <PageHeader logo="/img/phylote_logo-main.jpg" />
          <div className="vehicles__page--all-armored-vehicles">
            {/* Map armored vehicles */}
            {all_armored_vehicles.map((vehicle) => (
              <Card
                key={vehicle.ID}
                name={vehicle.name}
                image={vehicle.image[0].src}
                ID={vehicle.ID}
                details={vehicle.details.trim().substring(0, 280) + "..."}
              />
            ))}

            {/* Popups */}
            {all_armored_vehicles.map((vehicle) => (
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

    case "about":
      return (
        <>
          <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
          <h1>About</h1>
        </>
      );

    case "contact":
      return (
        <>
          <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
          <div className="contact__page">
            <div className="contact__page-details">
              <h1 className="contact__page-details--header heading-secondary">
                Contact Us
              </h1>
              <p className="sub-heading">
                Phone –{" "}
                <a href="tel:+2348068444195" className="contact__page-link">
                  +2348068444195
                </a>
              </p>
              <p>Between the hours of 8:00 AM and 5:00 PM (WAT)</p>
              <p>Feel free to reach out to us via text at any time.</p>
              <p className="sub-heading">
                ADDRESS –{" "}
                <a
                  href="https://www.google.com/maps/place/International+Armoring/@9.0753955,7.4495449,17z/data=!3m1!4b1!4m6!3m5!1s0x104e0bf6e563be61:0xe999452652617173!8m2!3d9.0753955!4d7.4521198!16s%2Fg%2F11j5bkqb28?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__page-link"
                >
                  Plot 795, Cadastra Zone C16, Idu Industrial District,
                  FCT-Abuja
                </a>
              </p>

              <p className="sub-heading">
                Email{" "}
                <a
                  href="mailto:phylotenigeria@gmail.com"
                  className="contact__page-link"
                >
                  phylotenigeria@gmail.com
                </a>
              </p>
            </div>
            <div className="contact__page-form">

              <Form />
            </div>
          </div>
        </>
      );

    default:
      return <h1>Page not found</h1>;
  }
}

export default AppLayout;
