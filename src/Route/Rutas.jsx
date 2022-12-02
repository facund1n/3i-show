import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";

import Main from "../views/Main";
import DestacadoDetailMap from "../components/Destacados/DestacadoDetailMap";
import NoticiaDetailMap from "../components/Noticias/NoticiaDetailMap";
import ShowDetailMap from "../components/Shows/ShowDetailMap";
import CommentBox from "../components/Comments/CommentBox";
import Register from "../views/Register";
import Login from "../views/Login";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path={"/destacados/:id"} element={<DestacadoDetailMap />} />
        <Route path={"/noticias/:id"} element={<NoticiaDetailMap />} />
        <Route path={"/shows/:id"} element={<ShowDetailMap />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/commentbox"} element={<CommentBox />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
