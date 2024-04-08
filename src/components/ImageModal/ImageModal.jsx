// import React from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";

const ModalWindow = ({ image, modalIsOpen, closeModal }) => {
  //   Modal.setAppElement("#root");
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={image}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Image Modal"
      >
        <div>{image && <img src={image.urls.regular} />}</div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
