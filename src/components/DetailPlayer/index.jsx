import React from "react";

const DetailPlayer = ({ type, text }) => {
  return (
    <div className="details-players">
      <p className="type" role="paragraph">
        {type}
      </p>
      <p className="text" role="paragraph">
        {" "}
        {text}{" "}
      </p>
    </div>
  );
};

export default DetailPlayer;
