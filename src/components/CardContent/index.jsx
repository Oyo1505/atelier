import React, { useEffect, useState } from "react";
import DetailPlayer from "../DetailPlayer";
import PlayerName from "../PlayerName";
import countries from "../../asset/json/country.json";
import getCountryPlayer from "../../utils/utils";
const CardContent = ({ player }) => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const playerCountry = getCountryPlayer(
      countries.countries,
      player.country.code
    );
    setCountry(playerCountry[0].country);
  }, [player]);

  return (
    <div className="card-content">
      <PlayerName lastName={player.lastname} firstName={player.firstname} />
      <div className="details">
        <DetailPlayer type={"RANK"} text={`#${player.data.rank}`} />
        <DetailPlayer type={"POINTS"} text={player.data.points} />
        <DetailPlayer type={"COUNTRY"} text={country} />
      </div>
    </div>
  );
};

export default CardContent;
