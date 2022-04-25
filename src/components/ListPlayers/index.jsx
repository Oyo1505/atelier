import React, { useContext } from "react";
import CardPlayer from "../CardPlayer/CardPlayer";
import "../../asset/css/listPlayers.css";
import { StoreContext } from "../../utils/StroreContext";

const ListPlayers = () => {
  const { players } = useContext(StoreContext);
  if (!players) return <p>Loarding</p>;
  return (
    <div id="list-players">
      {players.map((player) => (
        <CardPlayer key={player.id} player={player} />
      ))}
    </div>
  );
};

export default ListPlayers;
