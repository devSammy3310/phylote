import React from "react";

function Card({ ID, image, name, details }) {
  return (
    <div className="card">
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
        <h1 className="btn btn-close-white">View model</h1>
      </div>
    </div>
  );
}

export default Card;
