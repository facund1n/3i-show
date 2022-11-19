import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/Custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rutas from "./Route/Rutas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="b-black image2">
      <Rutas />
    </div>
  </React.StrictMode>
);
