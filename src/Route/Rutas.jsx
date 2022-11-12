import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
/* import LogIn from "../components/LogIn"; */
/* import Register from "../components/Register"; */
import Main from "../views/Main";
import ArticlesDetailMap from "../components/ArticlesDetailMap";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path={"/products/:id"} element={<ArticlesDetailMap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
