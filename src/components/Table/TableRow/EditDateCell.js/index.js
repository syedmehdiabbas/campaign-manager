import React, { useContext, useState } from "react";
import { EventsContext } from "./../../../../App";
import "./index.scss";

function EditDateCell({ event }) {
  const { events, changeEvent } = useContext(EventsContext);
  const [date, setDate] = useState(event.date);
  return (
    <td>
      <input
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
    </td>
  );
}

export default EditDateCell;
