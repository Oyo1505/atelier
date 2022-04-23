import React, { useEffect, useState } from "react";
import CardPlayer from "../CardPlayer/CardPlayer";
import "../../asset/css/listPlayers.css";
import dataPlayers from "../../asset/json/headtohead.json";

const ListPlayers = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(dataPlayers.players);
  }, []);
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
