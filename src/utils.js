// Funzioni generali per UI
export const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};

// Funzioni di gestione preferiti (localStorage)
export const toggleFavorite = (cityName) => {
  const stored = JSON.parse(localStorage.getItem("favorites")) || [];
  const updated = stored.includes(cityName)
    ? stored.filter(c => c !== cityName)
    : [...stored, cityName];
  localStorage.setItem("favorites", JSON.stringify(updated));
};

export const isFavorite = (cityName) => {
  const stored = JSON.parse(localStorage.getItem("favorites")) || [];
  return stored.includes(cityName);
};

// Dati statici eventi per città
export const cityEvents = {
  Siena: ["Palio di Siena - 2 Luglio e 16 Agosto"],
  Venezia: ["Carnevale di Venezia - Febbraio"],
  Verona: ["Festival lirico in Arena - Estate"]
};
