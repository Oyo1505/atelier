import React from "react";

const ImagePlayerModal = ({ image, name }) => {
  return (
    <div className="image-player-modal">
      <img src={image} alt={`model-${name}`} />
    </div>
  );
};

export default ImagePlayerModal;
