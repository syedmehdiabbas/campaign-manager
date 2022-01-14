import React from "react";

function Modal({ setIsModal, children }) {
  return (
    <div
      className="modal"
      onClick={(e) => {
        setIsModal(false);
      }}
    >
      <div
        className="modal-popup"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <p>Tickets: Free</p>
      </div>
    </div>
  );
}

export default Modal;
