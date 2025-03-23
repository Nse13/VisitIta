import React from "react";

export const LanguageSelector = ({ currentLang, setLang }) => {
  return (
    <div className="mb-2">
      <label className="text-sm mr-2">🌍 Language:</label>
      <select
        value={currentLang}
        onChange={(e) => setLang(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="it">🇮🇹 Italiano</option>
        <option value="en">🇬🇧 English</option>
      </select>
    </div>
  );
};
