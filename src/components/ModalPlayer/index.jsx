import React, { useContext } from "react";
import Modal from "react-modal";
import { StoreContext } from "../../utils/StroreContext";
import "../../asset/css/modal.css";
import ButtonClose from "../ButtonClose";
import ModalContent from "../ModalContent";
import ModalImagePlayer from "../ModalImagePlayer";

const ModalPlayer = () => {
  const { player, closeModal, modalIsOpen } = useContext(StoreContext);

  Modal.setAppElement("#root");
  return (
    <>
      <ButtonClose closeModal={closeModal} modalIsOpen={modalIsOpen} />
      <Modal isOpen={modalIsOpen} className="modal" overlayClassName="overlay">
        <ModalImagePlayer image={player.picture} name={player.lastname} />
        <ModalContent />
      </Modal>
    </>
  );
};

export default ModalPlayer;
