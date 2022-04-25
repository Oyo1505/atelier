import React, { createContext, useState, useEffect } from "react";
import dataPlayers from "../asset/json/headtohead.json";
const StoreContext = createContext();
const StoreProviderWrapper = (props) => {
  const [player, setPlayer] = useState([]);
  const [players, setPlayers] = useState([]);
  /*Fetch data players */
  useEffect(() => {
    const sortedPlayer = dataPlayers.players.sort(
      (a, b) => a.data.rank - b.data.rank
    );
    setPlayers(sortedPlayer);
  }, []);

  const filterPlayer = (value) => {
    const newArrPlayers = dataPlayers.players.filter((player) =>
      [player.firstname, player.lastname]
        .join(" ")
        .toLowerCase()
        .includes(value)
    );
    setPlayers(newArrPlayers);
  };
  //MODAL
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(product) {
    setIsOpen(true);
    setPlayer(product);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function getPlayer(product) {
    setPlayer(product);
  }
  console.log(players);
  const store = {
    player,
    players,
    modalIsOpen,
    filterPlayer,
    openModal,
    closeModal,
    getPlayer,
  };
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProviderWrapper };
