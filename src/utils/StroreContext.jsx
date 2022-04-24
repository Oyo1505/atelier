import React, { createContext, useState } from "react";
const StoreContext = createContext();
const StoreProviderWrapper = (props) => {
  const [player, setPlayer] = useState([]);
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
  const store = {
    player,
    modalIsOpen,
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
