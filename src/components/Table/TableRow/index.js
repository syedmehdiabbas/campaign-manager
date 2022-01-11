import React from "react";
import DateCell from "./DateCell.js";
import CampaignCell from "./CampaignCell/index.js";
import ViewButton from "./ViewButton.js/index.js";
import EditDateCell from "./EditDateCell.js/index.js";
import "./index.scss";

function TableRow({ event }) {
  return (
    <tr className="table-row">
      <DateCell date={event.date} />
      <CampaignCell event={event} />
      <ViewButton event={event} />
      <EditDateCell event={event} />
    </tr>
  );
}

export default TableRow;
