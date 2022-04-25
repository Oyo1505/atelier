import React from "react";

const ButtonClose = ({ closeModal, modalIsOpen }) => {
  return (
    <div
      className="btn-close"
      onClick={closeModal}
      style={{ display: modalIsOpen ? "inline-block" : "none" }}
    >
      <i className=" icon icon-close"></i>
    </div>
  );
};

export default ButtonClose;
