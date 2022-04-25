import React from "react";

const PlayerNameModal = ({ lastName, firstName }) => {
  return (
    <div className="modal-player-name">
      <h2 className="firstname">{firstName}</h2>
      <h2 className="lastname">{lastName}</h2>
    </div>
  );
};

export default PlayerNameModal;
