import React from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function Carousel({ images, type, cardData }) {
  if (type === "SimpleSlider") {
    var settings = {
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div class="slider-container">
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
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false,
    };
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="carousel-fade" key={index}>
            <img className="" src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    );
  } else if (type === "cardCarousel") {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
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

// import React from "react";

// const Carousel = ({ images }) => {
//   return (
//     <div>
//       <div class="autoplay-carousel slick-slider">
//         {images.map((image, index) => (
//           <div key={index}>
//             <img className="" src={image.src} alt={image.alt} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

//  <div
//    id="carouselExampleSlidesOnly"
//    className="carousel slide custom-carousel"
//    data-bs-ride="carousel"
//  >
//    <div className="carousel-inner">
//  {images.map((image, index) => (
//    <div
//      key={index}
//      className={`carousel-item ${index === 0 ? "active" : ""}`}
//    >
//      <img src={image.src} className="d-block w-100" alt={image.alt} />
//    </div>
//  ))}
//    </div>
//  </div>;
