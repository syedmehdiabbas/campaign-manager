import React, { useContext, useState } from "react";
import DocIcon from "../../../Icons/DocIcon/index.js";
import ReportIcon from "../../../Icons/ReportIcon/index.js";
import { EventsContext } from "./../../../../App";
import "./index.scss";

function EditDateCell({ event }) {
  const { events, changeEvent } = useContext(EventsContext);
  const [date, setDate] = useState(event.date);
  return (
    <td>
      <div className="edit-date-cell">
        <DocIcon />
        <ReportIcon />
        <input
          className="edit-date-icon"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            const updatedEvent = { ...event, date: e.target.value };
            //console.log([...events, updatedEvent]);
            //console.log(updatedEvent);
            changeEvent(updatedEvent);
          }}
          type="date"
        />
      </div>
    </td>
  );
}

export default EditDateCell;
