import React from "react";

export const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Cerca monumento, città o piatto..."
    onChange={(e) => onSearch(e.target.value)}
    className="border rounded p-2 w-full mb-4"
  />
);
