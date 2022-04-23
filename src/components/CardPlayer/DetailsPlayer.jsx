import React from "react";

const DetailsPlayer = ({ type, text }) => {
  return (
    <div className="details-players">
      <p>{type}</p>
      <p>{text}</p>
    </div>
  );
};

export default DetailsPlayer;
