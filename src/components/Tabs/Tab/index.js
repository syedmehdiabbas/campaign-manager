import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.scss";

function Tab({ tab, activeID, setActiveID }) {
  return (
    <button
      id={tab.id}
      onClick={(e) => {
        setActiveID(e.target.id);
      }}
      className={`tab ${tab.id === activeID ? "active" : ""}`}>
      <FormattedMessage id={`tab.${tab.text}`} />
    </button>
  );
}
export default Tab;
