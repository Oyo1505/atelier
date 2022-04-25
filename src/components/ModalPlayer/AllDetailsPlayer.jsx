import React, { useContext, useEffect, useState } from "react";
import DetailPlayer from "../DetailPlayer/DetailsPlayer";
import countries from "../../asset/json/country.json";
import getCountryPlayer from "../../utils/country";
import { StoreContext } from "../../utils/StroreContext";
const AllDetailPlayer = () => {
  const [country, setCountry] = useState("");
  const { player } = useContext(StoreContext);
  useEffect(() => {
    const playerCountry = getCountryPlayer(
      countries.countries,
      player.country.code
    );
    setCountry(playerCountry[0].country);
  }, []);
  return (
    <div className="all-details-player">
      <div className="row-details">
        <DetailPlayer type={"RANK"} text={`#${player.data.rank}`} />
        <DetailPlayer type={"POINTS"} text={player.data.points} />
        <DetailPlayer type={"COUNTRY"} text={country} />
      </div>
      <div className="row-details">
        <DetailPlayer type={"AGE"} text={player.data.age} />.
      </div>
      <div className="row-details">
        <DetailPlayer
          type={"WEIGHT"}
          text={`${player.data.weight / 1000} kg`}
        />
        <DetailPlayer type={"HEIGHT"} text={`${player.data.height} cm`} />
      </div>
    </div>
  );
};

export default AllDetailPlayer;
