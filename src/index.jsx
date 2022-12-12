import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/Custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rutas from "./Route/Rutas";
import { AuthProvider } from "react-auth-kit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"} // nombre cookie
    cookieDomain={window.location.hostname} // dominio de cookie
    cookieSecure={false} // protocolo HTTP, no HTTPS.
  >
    <div className="b-black">
      <Rutas />
    </div>
  </AuthProvider>
  // </React.StrictMode>
);
