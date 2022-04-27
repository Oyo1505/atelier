import React, { useContext } from "react";
import { StoreContext } from "../../utils/StroreContext";
import ItemTitles from "../ItemTitles";
const CarreerPlayer = () => {
  const { player } = useContext(StoreContext);

  if (!player.data) return <p>No titles</p>;
  return (
    <>
      <div className="career">
        <div className="career-title">CAREER TITLES </div>
        {player.data.titles.map((title, i) => (
          <ItemTitles
            key={i}
            year={title.year}
            numberOfTrophy={title.numberOfTrophy}
            locations={title.location}
          />
        ))}
      </div>
    </>
  );
};

export default CarreerPlayer;
