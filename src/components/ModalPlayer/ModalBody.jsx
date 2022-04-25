import React from "react";
import AllDetailsPlayer from "./AllDetailsPlayer";
import CarreerPlayer from "./CarreerPlayer";

const ModalBody = () => {
  return (
    <div className="modal-body">
      <AllDetailsPlayer />
      <CarreerPlayer />
    </div>
  );
};

export default ModalBody;
