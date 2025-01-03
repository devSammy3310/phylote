import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function Carousel({ images, type, cardData }) {
  // State to store the number of slides to show
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Effect to update slidesToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    // Set initial value based on the current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define the settings for the slider
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: slidesToShow, // Use the dynamic value for slidesToShow
    slidesToScroll: 1,
  };

  if (type === "SimpleSlider") {
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="carousel-autoplay" key={index}>
              <img className="" src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    );
  } else if (type === "Fade") {
    const fadeSettings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false,
    };
    return (
      <Slider {...fadeSettings}>
        {images.map((image, index) => (
          <div className="carousel-fade" key={index}>
            <img className="" src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    );
  } else if (type === "cardCarousel") {
    return (
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div className="carousel-slide-card" key={index}>
            <Card
              name={card.name}
              image={card.image[0].src}
              details={card.details.substring(0, 280) + "..."}
              ID={card.ID}
            />
          </div>
        ))}
      </Slider>
    );
  }
}
