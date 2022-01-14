import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.scss";

function Tab({ tab, activeID, setActiveID }) {
  return (
    <div>
      <button
        id={tab.id}
        onClick={(e) => {
          setActiveID(e.target.id);
        }}
        className={`tab ${tab.id === activeID ? "active" : ""}`}
      >
        <FormattedMessage id={`tab.${tab.text}`} />
      </button>
      <div className={`${tab.id === activeID ? "pointed" : ""}`}></div>
    </div>
  );
}
export default Tab;
