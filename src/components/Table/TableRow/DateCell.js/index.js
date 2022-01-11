import React, { useState, useEffect } from "react";
import "./index.scss";

function DateCell({ date }) {
  //let curTime = new Date();
  const [timeDiff, setTimeDiff] = useState(0);
  useEffect(() => {
    let todayDate = new Date().toISOString().slice(0, 10);
    todayDate = new Date(todayDate);
    todayDate = todayDate.getTime();
    let dateInMs = new Date(date);

    setTimeDiff((todayDate - dateInMs) / (1000 * 3600 * 24));
  }, [date]);

  //curTime.getDate() - date.getDate();
  return (
    <td>
      <p className="date-row">{date}</p>
      {timeDiff > 0 ? (
        <p className="daysleft-row">{Math.abs(timeDiff)} days ago</p>
      ) : (
        <p className="daysleft-row">{Math.abs(timeDiff)} days left</p>
      )}
    </td>
  );
}

export default DateCell;
