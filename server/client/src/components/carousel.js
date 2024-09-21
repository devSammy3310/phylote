import React from "react";

const Carousel = ({ images }) => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide custom-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={image.src} className="d-block w-100" alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
