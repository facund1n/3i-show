import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";

import Main from "../views/Main";
import DestacadoDetailMap from "../components/Destacados/DestacadoDetailMap";
import NoticiaDetailMap from "../components/Noticias/NoticiaDetailMap";
import ShowDetailMap from "../components/Shows/ShowDetailMap";
import CommentBox from "../components/Comments/CommentBox";
import Register from "../views/Register";
import Login from "../views/Login";
import Contact from "../views/Contact";
import SearchResults from "../components/SearchResults";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path={"/articulos/destacados/:id"}
          element={<DestacadoDetailMap />}
        />
        <Route
          path={"/articulos/noticias/:id"}
          element={<NoticiaDetailMap />}
        />
        <Route path={"/articulos/shows/:id"} element={<ShowDetailMap />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/commentbox"} element={<CommentBox />} />
        <Route path={"/contacto"} element={<Contact />} />
        <Route path={"/busqueda"} element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
