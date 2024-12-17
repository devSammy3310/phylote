import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
          <section className="about__page">
            <div className="about__page-heading">
              <h1 className="heading-primary">
                Empowering Defense, Elevating Security
              </h1>
            </div>

            {/* Overview Section */}
            <div className="overview__grid">
              <div className="about__page-overview container">
                <h2 className="heading-secondary">Who We Are</h2>
                <p>
                  Phylote Nigeria Limited, established in 1995, is a proudly
                  indigenous company specializing in armoring, restoring, and
                  upgrading vehicles. With decades of experience, we are
                  committed to delivering world-class defense and automotive
                  solutions that enhance operational efficiency and national
                  security.
                </p>

                <p className="about__text">
                  In partnership with{" "}
                  <strong>International Armoring Corporation (IAC) USA</strong>,
                  we produce the finest, most technologically advanced armored
                  vehicles in the world. IAC's global expertise enables us to
                  armor, restore, and upgrade vehicles using advanced
                  technologies at relatively reduced costs.
                </p>

                <p className="about__text">
                  Guided by our core values of <strong>reliability</strong>,{" "}
                  <strong>integrity</strong>, and <strong>innovation</strong>,
                  Phylote Nigeria Limited is proud to play a vital role in
                  building a secure and self-reliant Nigeria.
                </p>
              </div>

              <div className="about__page-certifications container">
                <h2 className="heading-secondary">
                  Our Certifications & Partnerships
                </h2>
                <p className="about__text">
                  Phylote Nigeria Limited is registered with the{" "}
                  <strong>
                    United States Department of State, Directorate of Defense
                    Trade Control
                  </strong>{" "}
                  as a Broker Member of the International Traffic in Arms
                  Regulations (ITAR) with Code No: <strong>K4628</strong>. Under
                  this US regulatory mandate, we are authorized to source,
                  access, and broker US Military hardware and sophisticated
                  civil technologies.
                </p>
                <p className="about__text">
                  We are in strategic partnership with the{" "}
                  <strong>
                    Defence Industries Corporation of Nigeria (DICON)
                  </strong>
                  , leveraging advanced technology and industry expertise to
                  deliver superior products and services. Additionally, as proud
                  members of the{" "}
                  <strong>
                    Defence Industry Association of Nigeria (DIAN)
                  </strong>
                  , we remain dedicated to advancing and supporting Nigeria's
                  local defense sector.
                </p>
              </div>
            </div>

            {/* Partners Section */}
            <div className="about__partners container">
              <h2 className="heading-secondary">Our Partners</h2>
              <div className="partners__grid">
                <img
                  src={"/img/dicon_logo.png"}
                  alt="DICON Logo"
                  className="about__partners partner-logo"
                />
                <img
                  src={"/img/Armormax_Logo.svg"}
                  alt="Partner Logo"
                  className="about__partners Armormax_logo"
                />
              </div>
            </div>

            <div class="about__page-why_we_exist">
              <div>
                <h2>Why We’re Here</h2>
                <p>
                  Our mission is to provide exceptional armoring solutions
                  through advanced technology, expert craftsmanship, and
                  rigorous quality control. We address our clients' unique
                  security needs with tailored solutions while investing in
                  innovation, fostering partnerships, and contributing to
                  national development through local industry support and skill
                  creation. Committed to timely delivery and outstanding
                  customer service, we ensure unmatched safety, reliability, and
                  satisfaction. Through these principles, Phylote Nigeria
                  Limited is committed to safeguarding assets and lives by
                  delivering unparalleled protection with cutting-edge armoring
                  technology and exceptional service.
                </p>
              </div>

              <div class="about__page-our_values">
                <div class="values">
                  <h3>Quality</h3>
                  <p>
                    We focus on delivering exceptional products and services
                    with excellence and attention to detail.
                  </p>
                </div>
                <div class="values">
                  <h3>Customer Commitment</h3>
                  <p>
                    We prioritize building impactful relationships and ensuring
                    customer satisfaction.
                  </p>
                </div>
                <div class="values">
                  <h3>Teamwork</h3>
                  <p>
                    We foster collaboration and mutual respect to meet customer
                    needs and achieve shared success.
                  </p>
                </div>
              </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="about__page-contact_us">
              <p>
                <span>Ready to partner with us?</span> Reach out today for
                consultations and inquiries.
              </p>
              <Link to="/contact" className="btn btn-green link">Get in touch</Link>
            </div>
          </section>
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

    case "service":
      return (
        <div>
          <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />

          {/* Core Expertise Section */}
          <div className="service__expertise container">
            <h2 className="heading-secondary">Our Expertise</h2>
            <div className="service__expertise-grid">
              <div className="service__expertise-grid--item">
                <svg className="icon icon-truck1">
                  <use href="/about.svg#icon-truck1"></use>
                </svg>
                <h3>Vehicle Armoring</h3>
                <p>Custom armoring solutions to ensure maximum protection.</p>
              </div>
              <div className="service__expertise-grid--item">
                <svg className="icon icon-spinner5">
                  <use href="/about.svg#icon-spinner5"></use>
                </svg>
                <h3>Run-Flat Tires</h3>
                <p>Durable tires and ballistic glass for enhanced safety.</p>
              </div>
              <div className="service__expertise-grid--item">
                <svg className="icon icon-tools">
                  <use href="/about.svg#icon-tools"></use>
                </svg>
                <h3>Vehicle Repairs</h3>
                <p>
                  Comprehensive repair and upgrade solutions for armored
                  vehicles.
                </p>
              </div>
              <div className="service__expertise-grid--item">
                <svg className="icon icon-truck1">
                  <use href="/about.svg#icon-emoji_people"></use>
                </svg>
                <h3>Technical Training</h3>
                <p>
                  Expert training and consultations to improve defense
                  readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return <h1>Page not found</h1>;
  }
}

export default AppLayout;
