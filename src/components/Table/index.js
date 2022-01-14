import "./index.scss";
import TableRow from "./TableRow";

import React from "react";
import { FormattedMessage } from "react-intl";

function Table({ events, activeID }) {
  if (events.length > 0)
    return (
      <table className="table">
        <thead>
          <tr className="table-head">
            <th>
              <FormattedMessage id="date" />
            </th>
            <th>
              <FormattedMessage id="campaign" />
            </th>
            <th>
              <FormattedMessage id="view" />
            </th>
            <th>
              <FormattedMessage id="actions" />
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <TableRow key={event.id} event={event}></TableRow>
          ))}
        </tbody>
      </table>
    );

  return <div className="no-event">no event</div>;
}

export default Table;
