import React, { useContext } from "react";
import Flag from "../Flag";
import { StoreContext } from "../../utils/StroreContext";
import PlayerNameModal from "../PlayerNameModal";

const ModalHeader = () => {
  const { player } = useContext(StoreContext);
  return (
    <div className="modal-header">
      <PlayerNameModal
        lastName={player.lastname}
        firstName={player.firstname}
      />
      <Flag flag={player.country.picture} codeCountry={player.country.code} />
    </div>
  );
};

export default ModalHeader;
