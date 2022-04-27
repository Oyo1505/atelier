import React from "react";

const PlayerNameModal = ({ lastName, firstName }) => {
  return (
    <div className="modal-player-name">
      <h1 className="firstname" title="header-firstname">
        {firstName}
      </h1>
      <h2 className="lastname" title="header-lastname">
        {lastName}
      </h2>
    </div>
  );
};

export default PlayerNameModal;
