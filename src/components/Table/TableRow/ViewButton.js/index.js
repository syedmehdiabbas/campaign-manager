import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./index.scss";
function ViewButton({ event }) {
  const [isModal, setIsModal] = useState(false);

  if (isModal) {
    return (
      <div
        className="modal"
        onClick={(e) => {
          setIsModal(false);
        }}>
        <div
          className="modal-popup"
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <p className="modal-popup-name">{event.name}</p>
          <img
            className="modal-popup-image"
            src="https://picsum.photos/seed/picsum/200/100"
            alt=""
          />
          <p className="modal-popup-date">{event.date}</p>
        </div>
      </div>
    );
  }

  return (
    <td>
      <button
        onClick={(e) => {
          setIsModal(true);
          console.log(event);
        }}
        className="view-button">
        <FormattedMessage id="view" />
      </button>
    </td>
  );
}

export default ViewButton;
