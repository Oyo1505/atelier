import React from "react";

const CardImagePlayer = ({ image, name }) => {
  return (
    <div className="card-image-player">
      <img src={image} alt={`player-${name}`} />
    </div>
  );
};

export default CardImagePlayer;
