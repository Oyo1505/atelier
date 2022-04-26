import React from "react";

const CardImagePlayer = ({ image, name }) => {
  return (
    <div className="card-image-player" data-testid="card-image">
      <img src={image} alt={`player-${name}`} data-testid="image" />
    </div>
  );
};

export default CardImagePlayer;
