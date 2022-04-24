import React from "react";

const ImagePlayerModal = ({ image, name }) => {
  return (
    <div className="image-player-modal">
      <img src={image} />
    </div>
  );
};

export default ImagePlayerModal;
