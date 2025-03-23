import React from "react";
import ReactDOM from "react-dom/client";
import VisitItaApp from "./components/VisitItaApp";
import regionsData from "./data/regionsData";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisitItaApp regionsData={regionsData} />
  </React.StrictMode>
);
