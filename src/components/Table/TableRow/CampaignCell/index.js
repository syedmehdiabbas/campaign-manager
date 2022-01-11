import React from "react";
import "./index.scss";

function CampaignCell({ event }) {
  return (
    <td>
      <p className="campaign-row">{event.name}</p>
      <p className="campaign-row">{event.country}</p>
    </td>
  );
}

export default CampaignCell;
