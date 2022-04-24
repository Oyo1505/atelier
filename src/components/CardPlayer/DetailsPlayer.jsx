import React from "react";

const DetailsPlayer = ({ type, text }) => {
  return (
    <div className="details-players">
      <p className="type">{type}</p>
      <p className="text"> {type === "RANK" ? `#${text}` : text} </p>
    </div>
  );
};

export default DetailsPlayer;
