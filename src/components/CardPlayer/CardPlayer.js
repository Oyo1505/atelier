import React from "react";
import CardContent from "./CardContent";
import CardImagePlayer from "./CardImagePlayer";
import "../../asset/css/cardPlayer.css";
const CardPlayer = ({ player }) => {
  return (
    <div className="card">
      <CardImagePlayer image={player.picture} />
      <CardContent player={player} />
    </div>
  );
};

export default CardPlayer;
