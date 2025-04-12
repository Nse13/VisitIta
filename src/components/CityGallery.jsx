import React from "react";

export const CityGallery = ({ city }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">{city.name}</h2>

      {/* Immagine principale della regione */}
      <div className="text-center">
        <img
          src={city.image}
          alt={city.name}
          className="rounded-xl w-full max-h-60 object-cover shadow"
        />
      </div>

      {/* Natura */}
      <div>
        <h3 className="font-semibold">🌿 Natura</h3>
        <div className="grid grid-cols-2 gap-2">
          {city.natura.map((img, i) => (
            <img key={i} src={img} alt="natura" className="rounded-md w-full object-cover" />
          ))}
        </div>
      </div>

      {/* Attrazioni */}
      <div>
        <h3 className="font-semibold">🏛 Attrazioni</h3>
        <div className="grid grid-cols-2 gap-2">
          {city.attrazioni.map((img, i) => (
            <img key={i} src={img} alt="attrazione" className="rounded-md w-full object-cover" />
          ))}
        </div>
      </div>

      {/* Cibo */}
      <div>
        <h3 className="font-semibold">🍝 Cibo Tipico</h3>
        <div className="grid grid-cols-2 gap-2">
          {city.cibo.map((img, i) => (
            <img key={i} src={img} alt="cibo" className="rounded-md w-full object-cover" />
          ))}
        </div>
      </div>

      {/* Attività */}
      <div>
        <h3 className="font-semibold">🧗 Attività</h3>
        <div className="grid grid-cols-2 gap-2">
          {city.attivita.map((img, i) => (
            <img key={i} src={img} alt="attività" className="rounded-md w-full object-cover" />
          ))}
        </div>
      </div>

      {/* Must Visit */}
      <div>
        <h3 className="font-semibold">🌟 Must Visit</h3>
        <div className="grid grid-cols-2 gap-2">
          {city.mustVisit.map((img, i) => (
            <img key={i} src={img} alt="mustvisit" className="rounded-md w-full object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
};
