import React, { useContext } from "react";
import Modal from "react-modal";
import ImagePlayerModal from "./ImagePlayerModal";
import { StoreContext } from "../../utils/StroreContext";
import "../../asset/css/modal.css";
import ButtonClose from "./ButtonClose";
import ModalContent from "./ModalContent";
const ModalPlayer = () => {
  const { player, closeModal, modalIsOpen } = useContext(StoreContext);

  Modal.setAppElement("#root");
  return (
    <>
      <ButtonClose closeModal={closeModal} modalIsOpen={modalIsOpen} />
      <Modal isOpen={modalIsOpen} className="modal" overlayClassName="overlay">
        <ImagePlayerModal image={player.picture} />
        <ModalContent />
      </Modal>
    </>
  );
};

export default ModalPlayer;