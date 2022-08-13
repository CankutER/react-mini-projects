import React from "react";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import context from "./context";
const Modal = () => {
  const mainContext = useContext(context);
  return (
    <div
      className={
        mainContext.modalIsOpen ? "modal-overlay show-modal" : "modal-overlay"
      }
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button
          className="close-modal-btn"
          onClick={() => {
            mainContext.toggleModal();
          }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
