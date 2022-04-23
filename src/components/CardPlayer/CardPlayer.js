import React from "react";
import CardContent from "./CardContent";
import CardImagePlayer from "./CardImagePlayer";

const CardPlayer = ({ player }) => {
  return (
    <div>
      <CardImagePlayer image={player.picture} />
      <CardContent player={player} />
    </div>
  );
};

export default CardPlayer;
