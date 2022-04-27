import React from "react";

const ModalImagePlayer = ({ image, name }) => {
  return (
    <div className="image-player-modal" data-testid="modal-image">
      <img src={image} alt={`model-${name}`} />
    </div>
  );
};

export default ModalImagePlayer;
