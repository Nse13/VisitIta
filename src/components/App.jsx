import React, { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";

import { ItalyMap } from "./ItalyMap";
import { SearchBar } from "./SearchBar";
import { CityGallery } from "./CityGallery";
import { toggleDarkMode, toggleFavorite, isFavorite, cityEvents } from "../utils.js";



import regionsData from "../data/regionsData";
import translations from "../translations/i18n";

const VisitItaApp = () => {
  const browserLang = navigator.language.startsWith("en") ? "en" : "it";
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [lang, setLang] = useState(browserLang);

  const t = translations[lang];

  const filteredCities = selectedRegion
    ? Object.entries(regionsData[selectedRegion].cities).filter(
        ([name, data]) =>
          name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          data.monuments.join().toLowerCase().includes(searchTerm.toLowerCase()) ||
          data.food.join().toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="p-4 space-y-4">
      <LanguageSelector currentLang={lang} setLang={setLang} />
      <button onClick={toggleDarkMode} className="text-sm underline text-gray-500">
        🌓 {lang === "it" ? "Cambia tema" : "Toggle theme"}
      </button>

      <h1 className="text-2xl font-bold">{t.explore}</h1>
      <ItalyMap onSelectRegion={setSelectedRegion} />
      <SearchBar onSearch={setSearchTerm} />

      {selectedRegion && (
        <div>
          <h2 className="text-xl font-semibold">{t.citiesIn(selectedRegion)}</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {filteredCities.map(([city]) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className="border px-2 py-1 rounded hover:bg-blue-100"
              >
                {city} {isFavorite(city) && "⭐"}
              </button>
            ))}
          </div>
          {regionsData[selectedRegion].highlights && (
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.naturalWonders}</h3>
              <ul className="list-disc ml-6">
                {regionsData[selectedRegion].highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {selectedCity && selectedRegion && (
        <div className="p-4 border rounded-lg bg-white dark:bg-gray-800">
          <h3 className="text-lg font-semibold">{selectedCity}</h3>
          <p><strong>{t.history}:</strong> {regionsData[selectedRegion].cities[selectedCity].history}</p>
          <p><strong>{t.monuments}:</strong> {regionsData[selectedRegion].cities[selectedCity].monuments.join(", ")}</p>
          <p><strong>{t.nature}:</strong> {regionsData[selectedRegion].cities[selectedCity].nature.join(", ")}</p>
          <p><strong>{t.food}:</strong> {regionsData[selectedRegion].cities[selectedCity].food.join(", ")}</p>
          {cityEvents[selectedCity] && (
            <p><strong>🎉 Eventi:</strong> {cityEvents[selectedCity].join(", ")}</p>
          )}
          <button
            onClick={() => toggleFavorite(selectedCity)}
            className="mt-2 text-sm text-blue-600 underline"
          >
            {isFavorite(selectedCity) ? "⭐ Rimuovi dai preferiti" : "☆ Aggiungi ai preferiti"}
          </button>
          <div className="mt-4">
            <CityGallery city={selectedCity} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitItaApp;
