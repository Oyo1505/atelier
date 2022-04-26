import React from "react";

const Flag = ({ flag, codeCountry }) => {
  return (
    <div className="country-flag-modal">
      <img src={flag} alt={`falg-${codeCountry}`} />
      <h2 className="code-country">{codeCountry}</h2>
    </div>
  );
};

export default Flag;
