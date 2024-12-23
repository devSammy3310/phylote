import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel";
import Card from "../components/Card";
import Popup from "../components/Popup";
import { mostUsedVehicles } from "../data/vehicles_data.js";
import { homepageCarousel } from "../data/vehicles_data";
import PhyloteIntro from "../components/phylote_intro.js";
import VehicleCategory from "./vehicleCategory.js";

function Home() {
  const images = [
    { src: "/img/AGMS-57.jpg", alt: "armored vehicle" },
    { src: "/img/1MM3049.jpg", alt: "armored vehicle" },
    { src: "/img/Cougar5.jpg", alt: "armored vehicle" },
  ];

  return (
    <section className="home_section--main">
      <main>
        <div className="heading-primary">
          <h1 className="heading-primary--main moveInRight">
            Protecting <span>what</span> matters
          </h1>
          <h2 className="heading-primary--sub moveInLeft">
            building for tomorrow
          </h2>
        </div>

        <PhyloteIntro />

        {/* <div className="carousel-container">
          <Carousel images={homepageCarousel} type="SimpleSlider" />
        </div> */}

        <div className="center-text">
          <h2 className="heading-secondary-2 u-margin-top-small">
            Welcome to Phylote Nigeria Limited
          </h2>
        </div>

        <section className="section__mission-statement">
          <div className="section__mission-statement-col-1">
            {/* <h3 className="margin-bottom-small heading-tertiary">
              Cutting-Edge Armored Vehicle Solutions
            </h3> */}
            <p>
              Phylote Nigeria Limited is a proudly indigenous company dedicated
              to the production, supply, and maintenance of advanced defense
              equipment. As a pioneer member of the Defence Industries
              Association of Nigeria (DIAN), we play a critical role in
              strengthening Nigeria's defense capabilities and driving
              innovation in sustainable energy solutions.
            </p>

            <p>
              In recognition of our expertise and commitment to excellence,
              DICON (Defence Industries Corporation of Nigeria) entered into a
              Memorandum of Understanding (MoU) with Phylote on January 23,
              2024. This strategic partnership authorizes us to:
            </p>
            <p>
              Manufacture and supply arms, ammunition, and armored vehicles.
              Develop and deliver safety garments, protective defense equipment,
              and other advanced technologies. Collaborate with DICON to advance
              Nigeria’s military industrial complex. Our operations are guided
              by the DICON Act 2023, a transformative legislation that
              prioritizes indigenous defense solutions, fosters local
              innovation, and ensures compliance with global standards.
            </p>

            <a href="/about" class="btn-text">
              Learn More About Us &rarr;
            </a>
          </div>
          <div className="section__mission-statement-col-2">
            <p>
              With our facility in Idu Industrial Area, Abuja, Phylote Nigeria
              Limited is well-equipped to deliver Excellent solutions,
              including:
            </p>
            <p>
              Armoring Services: High-performance armored vehicles designed for
              military, law enforcement, and private sector needs. CNG
              Conversion Solutions: Phylote offers cutting-edge Compressed
              Natural Gas (CNG) solutions for vehicles and power systems. Our
              services include retrofitting vehicles with CNG dual-fuel systems,
              deploying CNG-powered generators, and establishing NG dispensing
              stations at strategic locations. These initiatives reduce
              operational costs, enhance energy security, and support Nigeria's
              shift toward sustainable energy. Maintenance and Repair: Ensuring
              the reliability and longevity of defense assets through expert
              servicing. Customization: Tailor-made solutions to meet specific
              operational requirements. Our CNG solutions represent our
              commitment to energy sustainability, cost-efficiency, and
              operational flexibility. By leveraging Nigeria's abundant natural
              gas resources, we help organizations reduce reliance on
              traditional fuels while achieving long-term savings and
              environmental benefits.
            </p>
          </div>
        </section>

        <section className="section__mission_statement-2">
          <div className="section__mission_statement-2-item section__mission_statement-2-item--1">
            <img
              className="phylote-logo"
              src="/img/tlc-79/TLC79-RC1.jpg"
              alt="phylote logo"
            />
          </div>
          <div className="section__mission_statement-2-item--2">
            <p>
              At Phylote Nigeria Limited, we are driven by the belief that those
              who protect our lives deserve vehicles that are meticulously
              designed to safeguard theirs. Every Phylote armored vehicle is
              crafted by skilled artisans, engineered to withstand high-caliber
              rounds and extreme environmental conditions. While our standard
              models are equipped with an extensive range of essential features,
              we offer a variety of upgrades and custom options to ensure your
              vehicle is fully prepared for any challenge.
            </p>
          </div>
          <div className="section__mission_statement-2-item section__mission_statement-2-item--3">
            <img
              className="phylote-logo"
              src="/img/tlc-79/TLC79-RC2.jpg"
              alt="phylote logo"
            />
          </div>
          <div className="section__mission_statement-2-global-reach">
            <h1>
              Nationwide Protection. <span>Ready for Any Challenge.</span>
            </h1>

            <p>
              From the bustling cities to remote regions, our armored vehicles
              stand strong, supporting operations across all 36 states of
              Nigeria and beyond.
            </p>
          </div>
        </section>

        <section className="section-vehicle__category ">
          <VehicleCategory />
        </section>

        <section
          className="section-vehicle__most-used u-text-center"
          id="section-vehicle__most-used"
        >
          <div>
            <h2 className="heading-secondary u-margin-top-large margin-bottom-med">
              Most Popular Armored Vehicles
            </h2>
          </div>

          <div class="section-vehicle__most-used-card-carousel">
            <Carousel type="cardCarousel" cardData={mostUsedVehicles} />
          </div>

          <div className="section-vehicle__most-used-flex u-flex u-space-btw">
            {mostUsedVehicles.map((vehicle) => (
              <Card
                name={vehicle.name}
                image={vehicle.image[0].src}
                details={vehicle.details.trim().substring(0, 280) + "..."}
                ID={vehicle.ID}
              />
            ))}
          </div>

          <Link
            to="/armored-vehicles/all-armored-vehicles"
            className="btn-text"
          >
            VIEW ALL PHYLOTE ARMORED VEHICLES &rarr;
          </Link>

          {mostUsedVehicles.map((vehicle) => (
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
        </section>

        <section className="section__service">
          <div className="section__service-support-box">
            <div className="section__service-support">
              <h1 className="section__service-support-header">
                service & <span>support</span>
              </h1>

              <p>
                Maintenance & repairs, parts & accessories, consultation &
                customization, training & after-sales support, Emergency &
                Evacuation Vehicle Armoring.
              </p>

              <Link
                to="/service"
                className="section__service-support-link btn btn-green btn--round"
              >
                service & support
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Home;
