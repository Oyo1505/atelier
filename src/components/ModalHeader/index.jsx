import React, { useContext } from "react";
import Flag from "../Flag";
import { StoreContext } from "../../utils/StroreContext";
import ModalPlayerName from "../ModalPlayerName";

const ModalHeader = () => {
  const { player } = useContext(StoreContext);
  return (
    <div className="modal-header">
      <ModalPlayerName
        lastName={player.lastname}
        firstName={player.firstname}
      />
      <Flag flag={player.country.picture} codeCountry={player.country.code} />
    </div>
  );
};

export default ModalHeader;
