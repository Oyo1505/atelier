import React, { useEffect, useState } from "react";
import DetailsPlayer from "./DetailsPlayer";
import PlayerName from "./PlayerName";
import countries from "../../asset/json/country.json";
const CardContent = ({ player }) => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const playerCountry = countries.countries.filter(
      (country) => country.code === player.country.code
    );
    setCountry(playerCountry[0].country);
  }, []);

  return (
    <div className="card-content">
      <PlayerName lastName={player.lastname} firstName={player.firstname} />
      <div className="details">
        <DetailsPlayer type={"RANK"} text={player.data.rank} />
        <DetailsPlayer type={"POINTS"} text={player.data.points} />
        <DetailsPlayer type={"COUNTRY"} text={country} />
      </div>
    </div>
  );
};

export default CardContent;
