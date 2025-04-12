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

    {/* ✅ MOSTRA IMMAGINI DELLA REGIONE */}
    <div className="mt-4">
      <CityGallery city={regionsData.find(r => r.name === selectedRegion)} />
    </div>
  </div>
)}
