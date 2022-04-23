import React from "react";
import DetailsPlayer from "./DetailsPlayer";
import PlayerName from "./PlayerName";
import countries from "../../asset/json/country.json";
const CardContent = ({ player }) => {
  console.log(player);
  // const playerCountry = countries.country.filter(
  //   (el) => el.code === player.country.code
  // );
  return (
    <div className="card-content">
      <PlayerName lastName={player.lastname} firstName={player.firstname} />
      <div className="details">
        <DetailsPlayer type={"RANK"} text={player.data.rank} />
        <DetailsPlayer type={"POINTS"} text={player.data.points} />
        <DetailsPlayer type={"COUNTRY"} text={player.country.code} />
      </div>
    </div>
  );
};

export default CardContent;
