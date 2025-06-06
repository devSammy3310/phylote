import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import VehicleCategory from "./vehicleCategory";
import Card from "../components/Card";
import { Form } from "../components/Form";

function AppLayout() {
  const { id } = useParams();
  // useAnimateOnView();

  // Render based on the route parameter (id)
  switch (id) {
    case "weapons":
      return (
        <div
          style={{
            textAlign: "center",
            padding: "50px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div style={{ fontSize: "4rem", margin: "20px 0" }}>🚧 🛠️ ⏳</div>
          <h1 style={{ fontSize: "3rem", color: "#ff9800" }}>
            Oops! Work in Progress
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#333" }}>
            This page is still under construction, but we promise it&#39;ll be
            worth the wait!
          </p>
          <p>Here’s what’s happening right now:</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>🔧 The team is hammering out some details</li>
            <li>🎨 The digital paint is still drying</li>
            <li>☕ The coffee machine is working overtime</li>
          </ul>
          <p style={{ fontStyle: "italic", color: "#777", marginTop: "20px" }}>
            🤔 <strong>Why don’t skeletons fight each other?</strong>
            <br /> They don’t have the guts! 😂
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          >
            Return to Home
          </Link>
        </div>
      );

    case "armored-vehicles":
      return (
        <div>
          <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
          <VehicleCategory />
        </div>
      );

    case "vehicles":
      return (
        <div>
          <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
          <VehicleCategory />
        </div>
      );

    case "about":
      return (
        <>
          <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
          <section className="about__page">
            <div className="background">
              <div className="about__page-heading">
                <h1>Empowering Defense, Elevating Security</h1>
              </div>

              {/* Overview Section */}
              <div className="overview__grid swap">
                <div className="about__page-overview container">
                  <h2 className="heading-secondary-2">Who We Are</h2>
                  <p>
                    Phylote Nigeria Limited is an innovative defense and
                    security company based in the Idu Industrial Area, Abuja.
                    Specializing in armored vehicles, CNG conversion systems,
                    night vision technologies, and advanced defense solutions,
                    Phylote is dedicated to enhancing operational efficiency and
                    safety for its clients. The company is committed to
                    providing customized, sustainable solutions tailored for
                    government officials, military personnel, and private
                    clients. Phylote combines technological expertise with a
                    deep understanding of local and global security challenges,
                    making it a trusted name in the defense industry.
                  </p>

                  <p className="about__text">
                    In partnership with{" "}
                    <strong>
                      International Armoring Corporation (IAC) USA
                    </strong>
                    , we produce the finest, most technologically advanced
                    armored vehicles in the world. IAC's global expertise
                    enables us to armor, restore, and upgrade vehicles using
                    advanced technologies at relatively reduced costs.
                  </p>

                  <p className="about__text">
                    Guided by our core values of <strong>reliability</strong>,{" "}
                    <strong>integrity</strong>, and <strong>innovation</strong>,
                    Phylote Nigeria Limited is proud to play a vital role in
                    building a secure and self-reliant Nigeria.
                  </p>
                </div>

                <div className="about__page-overview container full-width">
                  <img
                    className="certification__logo who_we_are"
                    src="/img/who_we_are.png"
                  />
                </div>
              </div>

              <div className="overview__grid ">
                <div className="about__page-overview container full-width">
                  <img
                    className="certification__logo"
                    src="/img/certification.jpeg"
                  />
                </div>

                <div className="about__page-certifications container">
                  <h2 className="heading-secondary-2">
                    Our Certifications & Partnerships
                  </h2>
                  <p className="about__text">
                    Phylote Nigeria Limited collaborates with key partners to
                    deliver superior quality and innovation. These include its
                    technical partnership with Armormax, renowned for global
                    excellence in vehicle armoring, and its membership in the
                    Defence Industries Association of Nigeria (DIAN), which
                    reinforces its role in advancing the nation's defense
                    capabilities.
                  </p>
                  <p className="about__text">
                    The company operates under full licensure for its range of
                    defense and security services, ensuring compliance with
                    international standards and providing assurance to its
                    clients. Phylote is proud to support sustainable and
                    cutting-edge solutions for the nation's security needs.
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
                <div className="values">
                  <h3>Quality</h3>
                  <p>
                    We focus on delivering exceptional products and services
                    with excellence and attention to detail.
                  </p>
                </div>
                <div className="values">
                  <h3>Customer Commitment</h3>
                  <p>
                    We prioritize building impactful relationships and ensuring
                    customer satisfaction.
                  </p>
                </div>
                <div className="values">
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
              <Link to="/contact" className="btn btn-green link">
                Get in touch
              </Link>
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
              <h1 className="contact__page-details--header heading-secondary-2">
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
                Email –{" "}
                <a
                  href="mailto:adedotun.bademosi@phyloteng.com"
                  className="contact__page-link"
                >
                  adedotun.bademosi@phyloteng.com
                </a>
              </p>
              <p className="sub-heading">
                {" "}
                <a
                  href="mailto:kehinde.bademosi@phyloteng.com"
                  className="contact__page-link"
                >
                  kehinde.bademosi@phyloteng.com
                </a>
              </p>
            </div>
            <div className="contact__page-form">
              <Form />
            </div>
          </div>

          <div className="contact__page-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8723121406924!2d7.4521197999999975!3d9.075395499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bf6e563be61%3A0xe999452652617173!2sInternational%20Armoring!5e0!3m2!1sen!2stw!4v1735296926290!5m2!1sen!2stw"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </>
      );

    case "service":
      return (
        <div className="service__page">
          <PageHeader logo="/img/phylote_logo-main.jpg" ID={id} />
          <div class="service__intro">
            <h2 className="heading-secondary-2">Experience Superior Service</h2>
            <p>
              Explore our dedicated services portal for easy access to a full
              range of solutions, whether for your existing vehicle or one
              you're interested in purchasing.
            </p>
          </div>
          {/* Core services Section */}
          <div class="service__core-service ">
            <div class="service__core-service--container">
              <div className="info container">
                <div>
                  <h2>Armored Vehicle Production</h2>
                  <p>
                    We design and manufacture a wide range of armored vehicles,
                    including armored commercial trucks, Cash-In-Transit
                    vehicles, armored personnel carrier and VIP transport
                    vehicles. Our producon process ensures each vehicle meets
                    the highest standards of safety and performance.
                  </p>
                </div>
              </div>
              <div className="image_container">
                <img
                  className="image"
                  src="/img/vehicle_production.png"
                  alt=""
                />
              </div>
            </div>

            <div class="service__core-service--container swap">
              <div className="image_container container">
                <iframe
                  className="image"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/6Iggj_-m7-k?si=BL3b9_n28KAYcP60"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="info container">
                <div>
                  <h2>Security Enhancements</h2>
                  <p>
                    We implement advanced security technologies, such as
                    upgraded locking systems, bullet-resistant glass, and new
                    360- degree surveillance systems. These enhancements provide
                    superior protection for our clients, that is we integrate
                    sophiscated security technologies, including enhanced
                    locking systems, bullet-resistant glass, and innovave
                    360-degree surveillance systems. These upgrades ensure our
                    clients receive the highest level of protection.
                  </p>
                </div>
              </div>
            </div>

            <div class="service__core-service--container">
              <div class="info container">
                <div>
                  <h2>Restoration Services</h2>
                  <p>
                    Our restoration services bring armored vehicles back to
                    their original or enhanced condion. We address structural
                    integrity, system functionality, and overall vehicle
                    aesthetics to ensure they are as good as new.
                  </p>
                </div>
              </div>
              <div className="image_container">
                <iframe
                  className="image"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/wBzubAvLt1w?si=BwNun6CvLxudlklg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="service__core-service--container swap">
              <div className="image_container container">
                <img
                  className="image maintenance"
                  src="/img/maintenance.jpg"
                  alt=""
                />
              </div>
              <div class="info container">
                <div>
                  <h2>Comprehensive Maintenance and upgrade services</h2>
                  <p>
                    We offer a complete range of maintenance and upgrade
                    services for all armored vehicles. Our comprehensive
                    maintenance ensures longevity and operational efficiency
                    through regular inspections, repairs, and component
                    replacements. Simultaneously, our upgrade services enhance
                    existing vehicles with the latest armoring technologies and
                    materials, improving protection and performance.
                  </p>
                </div>
              </div>
            </div>

            <div class="service__core-service--container">
              <div class="info container">
                <div>
                  <h2>CNG Conversion and Solutions</h2>
                  <p>
                    At Phylote Nigeria Limited, we are committed to driving
                    sustainable energy solutions through our Compressed Natural
                    Gas (CNG) services. With the increasing demand for cleaner
                    and more cost-effective energy alternatives, Phylote
                    provides comprehensive CNG conversion and infrastructure
                    solutions to meet diverse client needs, including vehicle
                    conversion, CNG-powered generators, and natural gas (NG)
                    dispensing stations.
                  </p>
                </div>
              </div>
              <div className="image_container">
                <img className="image" src="/img/cng_tank.jpg" alt="" />
              </div>
            </div>

            <div class="service__core-service--container swap">
              <div className="image_container container">
                <img
                  className="image maintenance"
                  src="/img/cng_station.jpg"
                  alt=""
                />
              </div>
              <div class="info container">
                <div>
                  <h2>CNG station</h2>
                  <p>
                    At Phylote Nigeria Limited, we don’t just build CNG
                    stations; we build the future of sustainable energy in
                    Nigeria. Partner with us to transform your fueling
                    infrastructure and embrace the next generation of energy
                    solutions.Switching to NG as a primary fuel source offers
                    tremendous benefits, including reduced operational costs,
                    lower carbon emissions, and energy security by utilizing
                    Nigeria's abundant natural gas resources.
                  </p>
                </div>
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
