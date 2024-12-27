import React from "react";
import { Link } from "react-router-dom";
import useAnimateOnView from "../components/useAnimate.js";
import Carousel from "../components/carousel";
import Card from "../components/Card";
import Popup from "../components/Popup";
import { mostUsedVehicles } from "../data/vehicles_data.js";
import { homepageCarousel } from "../data/vehicles_data";
import PhyloteIntro from "../components/phylote_intro.js";
import VehicleCategory from "./vehicleCategory.js";
import { use } from "react";

function Home() {
  const images = [
    { src: "/img/AGMS-57.jpg", alt: "armored vehicle" },
    { src: "/img/1MM3049.jpg", alt: "armored vehicle" },
    { src: "/img/Cougar5.jpg", alt: "armored vehicle" },
  ];
  useAnimateOnView({ threshold: 0, rootMargin: "" });
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
          <div className="section__mission-statement-col-1 ">
            {/* <h3 className="margin-bottom-small heading-tertiary">
              Cutting-Edge Armored Vehicle Solutions
            </h3> */}
            <p className="animate slideRight">
              Phylote Nigeria Limited is a proudly indigenous company dedicated
              to revolutionizing the defense and security sector in Nigeria. As
              a licensed partner of the Defence Industries Corporation of
              Nigeria (DICON), under the newly enacted DICON Act 2023, we have
              the authority to manufacture and supply a wide range of defense
              equipment, including armored vehicles, safety garments, arms,
              ammunition, and advanced security solutions. Our state-of-the-art
              facility, located in the Idu Industrial Area, Abuja, is equipped
              with cutting-edge technology and a skilled workforce committed to
              delivering excellence. We partner with globally recognized
              technical experts like Armormax and leverage our strong regulatory
              backing to ensure the highest standards of quality and
              reliability.
            </p>

            <a href="/about" class="btn-text">
              Learn More About Us &rarr;
            </a>
          </div>
          <div className="section__mission-statement-col-2 ">
            <div className="composition ">
              <img
                src="/img/AGMS-57.jpg"
                alt="armored vehicle"
                className="composition_photo animate slideLeft composition_photo--1"
              ></img>
              <img
                src="/img/escalade1.jpg"
                alt="armored vehicle"
                className="composition_photo animate fade-in  composition_photo--2"
              ></img>
              <img
                src="/img/cobra4.jpg"
                alt="armored vehicle"
                className="composition_photo animate slideUp composition_photo--3"
              ></img>
            </div>
          </div>
        </section>

        <section className="section__mission_statement-2">
          <div className="section__mission_statement-2-item section__mission_statement-2-item--1 animate slideRight">
            <img
              className="phylote-logo"
              src="/img/tlc-79/TLC79-RC1.jpg"
              alt="phylote logo"
            />
          </div>
          <div className="section__mission_statement-2-item--2 animate fade-in">
            <p className="u-margin-bottom-small">
              "
              <strong>
                At Phylote, we don’t just meet expectations—we exceed them. Our
                commitment to innovation, security, and national development
                makes us the trusted choice for defense solutions. Explore our
                services and discover how we can help protect lives, empower
                your operations, and build a safer future."
              </strong>
              <p className="u-margin-top-small">
                {" "}
                — CEO Phylote Nigeria Limited
              </p>
            </p>
          </div>
          <div className="section__mission_statement-2-item section__mission_statement-2-item--3 animate slideLeft">
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
