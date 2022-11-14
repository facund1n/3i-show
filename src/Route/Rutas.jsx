import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
/* import LogIn from "../components/LogIn"; */
/* import Register from "../components/Register"; */
import Main from "../views/Main";
import DestacadoDetailMap from "../components/Destacados/DestacadoDetailMap";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path={"/destacados/:id"} element={<DestacadoDetailMap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
