import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import DollarIcon from "../../../Icons/DollarIcon/index.js";
import Modal from "../../../Modal";
import "./index.scss";
function ViewButton({ event }) {
  const [isModal, setIsModal] = useState(false);

  if (isModal) {
    return (
      <Modal setIsModal={setIsModal}>
        <h3 className="modal-popup-name">{event.name}</h3>
        <img className="modal-popup-image" src={event.pic} alt={event.name} />
        <p className="modal-popup-date">{event.date}</p>
      </Modal>
    );
  }

  return (
    <td>
      <button
        onClick={(e) => {
          setIsModal(true);
          console.log(event);
        }}
        className="view-button"
      >
        <DollarIcon />
        <p className="pricing-text">view pricing</p>
      </button>
    </td>
  );
}

export default ViewButton;
