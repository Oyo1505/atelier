import React from "react";

const ImagePlayerModal = ({ image, name }) => {
  return (
    <div className="image-player-modal">
      <img src={image} alt={name} />
    </div>
  );
};

export default ImagePlayerModal;
