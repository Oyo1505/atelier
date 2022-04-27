import React from "react";

const PlayerName = ({ lastName, firstName }) => {
  return (
    <h3>
      {firstName} {lastName}
    </h3>
  );
};

export default PlayerName;
