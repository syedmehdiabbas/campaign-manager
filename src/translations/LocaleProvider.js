import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import messages_en from "./en.json";
import messages_hi from "./hi.json";

function LocaleProvider({ children }) {
  let messages = {
    en: messages_en,
    hi: messages_hi,
  };

  const [lang, setLang] = useState("en");

  return (
    <div>
      <label>Language: </label>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
      <IntlProvider locale={lang} messages={messages[lang]}>
        {children}
      </IntlProvider>
    </div>
  );
}

export default LocaleProvider;
