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
import UserPanel from "../components/UserPanel";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const Rutas = () => {
  const [auth, setAuth] = useState();
  const authState = Cookies.get("_auth_state");

  useEffect(() => {
    !authState ? setAuth(false) : setAuth(true);
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main auth={auth} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path={"/articulos/destacados/:id"}
          element={<DestacadoDetailMap auth={auth} />}
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
        <Route path={"/users/:id"} element={<UserPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
