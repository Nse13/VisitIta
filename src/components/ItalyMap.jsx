import React from "react";

export const ItalyMap = ({ onSelectRegion }) => {
  const regions = [
    "Lombardia", "Piemonte", "Veneto", "Liguria", "EmiliaRomagna",
    "TrentinoAltoAdige", "ValleDAosta", "Marche", "Umbria", "Lazio",
    "Abruzzo", "Molise", "Campania", "Puglia", "Basilicata",
    "Calabria", "Sicilia", "Sardegna"
  ];

  return (
    <div className="grid grid-cols-3 gap-2 p-4 bg-gray-100 rounded-xl">
      {regions.map(region => (
        <button
          key={region}
          onClick={() => onSelectRegion(region)}
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          {region.replace(/([A-Z])/g, ' $1').trim()}
        </button>
      ))}
    </div>
  );
};
