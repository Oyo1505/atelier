import React, { useContext } from "react";
import CardContent from "../CardContent/index";
import CardImagePlayer from "../CardImagePlayer";
import "../../asset/css/cardPlayer.css";
import { StoreContext } from "../../utils/StroreContext";

const CardPlayer = ({ player }) => {
  const { openModal } = useContext(StoreContext);
  return (
    <div className="card" onClick={() => openModal(player)} aria-label="open">
      <CardImagePlayer image={player.picture} name={player.firstname} />
      <CardContent player={player} />
    </div>
  );
};

export default CardPlayer;
