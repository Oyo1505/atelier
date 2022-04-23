import React from "react";

const PlayerName = ({ lastName, firstName }) => {
  return (
    <h4>
      {lastName}
      {firstName}
    </h4>
  );
};

export default PlayerName;
