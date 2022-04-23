import React from "react";

const Flag = ({ flag, codeCountry }) => {
  return (
    <div>
      <img src={flag} />
      <h2>codeCountry</h2>
    </div>
  );
};

export default Flag;
