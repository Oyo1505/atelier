import React from "react";

const DetailPlayer = ({ type, text }) => {
  return (
    <div className="details-players">
      <p className="type">{type}</p>
      <p className="text"> {text} </p>
    </div>
  );
};

export default DetailPlayer;
