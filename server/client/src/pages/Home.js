import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel";
import Card from "../components/Card";
import Popup from "../components/Popup";
import mostUsedVehicles from "../data/vehicles_data";
import { homepageCarousel } from "../data/vehicles_data";

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
            Defend <span>with</span> Confidence
          </h1>
          <h2 className="heading-primary--sub moveInLeft">
            protect, loyal and strong.
          </h2>
        </div>

        <div className="carousel-container">
          <Carousel images={homepageCarousel} />
        </div>

        <div className="center-text">
          <h2 className="heading-secondary u-margin-top-small">
            Welcome to Phylote Nigeria Limited
          </h2>
        </div>

        <section className="section__mission-statement">
          <div className="section__mission-statement-col-1">
            <h3 className="margin-bottom-small heading-tertiary">
              Cutting-Edge Armored Vehicle Solutions
            </h3>
            <p>
              we specialize in the production of high-performance armored
              vehicles designed to meet various security needs. From VIP
              transport vehicles to tactical units and cash-in-transit (CIT)
              trucks, our armored vehicles are built with cutting-edge
              technology and precision engineering.
            </p>

            <a href="###" class="btn-text">
              Learn More About Us &rarr;
            </a>
          </div>
          <div className="section__mission-statement-col-2">
            <div className="composition">
              <img
                src="/img/range/Jeep-Gladiator-Rubicon-Nov5.jpg"
                alt="armored vehicle"
                className="composition_photo composition_photo--1"
              ></img>
              <img
                src="/img/escalade1.jpg"
                alt="armored vehicle"
                className="composition_photo composition_photo--2"
              ></img>
              <img
                src="/img/range/lx600_1.jpg"
                alt="armored vehicle"
                className="composition_photo composition_photo--3"
              ></img>
            </div>
          </div>
        </section>

        <section className="section__mission_statement-2">
          <div className="section__mission_statement-2-item section__mission_statement-2-item--1">
            <img
              className="phylote-logo"
              src="/img/phylote_logo.jpg"
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
          <div className="section__mission_statement-2-item section__mission_statement-2-item--3"></div>
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
          <div className="section-vehicle__category-flex u-flex u-space-btw">
            <div className="feature-box feature-box--1">
              <svg className="icon icon-shield1">
                <use href="/sprite.svg#icon-shield1"></use>
              </svg>

              
              <h4>Police & Government</h4>
              <p>Vehicles</p>
            </div>

            <div className="feature-box feature-box--2">
              <svg className="icon icon-shield3">
                <use href="/sprite.svg#icon-shield3"></use>
              </svg>
              <h4>Fire & Rescue</h4>
              <p>Vehicles</p>
            </div>

            <div className="feature-box feature-box--3">
              <svg className="icon icon-shield2">
                <use href="/sprite.svg#icon-shield2"></use>
              </svg>
              <h4>Military Armored</h4>
              <p>Vehicles</p>
            </div>

            <div className="feature-box feature-box--4">
              <svg className="icon icon-sphere">
                <use href="/sprite.svg#icon-sphere"></use>
              </svg>
              <h4>International</h4>
              <p>Vehicles</p>
            </div>
          </div>
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

          <div className="section-vehicle__most-used-flex u-flex u-space-btw">
            {mostUsedVehicles.map((vehicle) => (
              <Card
                name={vehicle.name}
                image={vehicle.image}
                details={vehicle.details.substring(0, 280) + "..."}
                ID={vehicle.ID}
              />
            ))}
          </div>

          <Link
            to="/all-armored-vehicles"
            className="btn-text u-margin-top-large"
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
                to="/support"
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
