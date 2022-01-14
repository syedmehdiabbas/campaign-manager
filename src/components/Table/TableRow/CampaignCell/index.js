import React from "react";
import "./index.scss";

function CampaignCell({ event }) {
  return (
    <td className="campaign-cell">
      <img src={event.pic}></img>
      <div>
        <p className="campaign-row name">{event.name}</p>
        <p className="campaign-row">{event.country}</p>
      </div>
    </td>
  );
}

export default CampaignCell;
