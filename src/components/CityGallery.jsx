import React from "react";

export const CityGallery = ({ city }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-gray-200 rounded p-4 text-center">Immagine monumento</div>
      <div className="bg-gray-200 rounded p-4 text-center">Immagine paesaggio</div>
    </div>
  );
};
// Galleria immagini - logica già integrata nel componente principale.
