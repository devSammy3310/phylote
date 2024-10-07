import React from "react";

function Card({ ID, image, name, details }) {
  return (
    <div className="card" id={ID}>
      <div className={`card__side card__side--front card__side--front-${ID}`}>
        {image && (
          <img
            className={`card__picture card__picture--${ID}`}
            src={image}
            alt=""
          />
        )}

        {name && (
          <div className={`card__name card__name--${ID} margin-bottom-small`}>
            <h3>{name}</h3>
          </div>
        )}

        {details && (
          <div className="card__details">
            <p>{details}</p>
          </div>
        )}
      </div>

      <div className={`card__side card__side--back card__side--back-${ID}`}>
        {image && <img src={image} alt="" />}
        <a href={`#popup-${ID}`}>
          <h1 className="btn">View model</h1>
        </a>
      </div>
    </div>
  );
}

export default Card;
