import React from "react";

const ItemTitles = ({ year, numberOfTrophy, locations }) => {
  return (
    <>
      <div className="year-titles">
        <span className="date">
          <b>{year}</b> - {numberOfTrophy}
        </span>
        {locations.map((location) => (
          <p>{location}</p>
        ))}
      </div>
    </>
  );
};

export default ItemTitles;
