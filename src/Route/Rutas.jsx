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
import UserSaved from "../components/UserSaved";
import UserLiked from "../components/UserLiked";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const Rutas = () => {
  const [auth, setAuth] = useState("");
  const [userLogged, setUserLogged] = useState("");

  const authState = Cookies.get("_auth"); // token
  const getUserName = Cookies.get("_auth_state"); // usuario

  useEffect(() => {
    if (authState && getUserName) {
      const userNoRegExp = getUserName.replace(/[^a-zA-Z 0-9.]+/g, "");
      const userCleaned = userNoRegExp.slice(4);
      !authState ? setAuth(false) : setAuth(true);
      !getUserName ? setUserLogged("") : setUserLogged(userCleaned);
    }
    // eslint-disable-next-line
  }, [auth, userLogged]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main auth={auth} userLogged={userLogged} />}
        />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path={"/articulos/destacados/:id"}
          element={<DestacadoDetailMap auth={auth} userLogged={userLogged} />}
        />
        <Route
          path={"/articulos/noticias/:id"}
          element={<NoticiaDetailMap auth={auth} userLogged={userLogged} />}
        />
        <Route path={"/articulos/shows/:id"} element={<ShowDetailMap />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/commentbox"} element={<CommentBox />} />
        <Route path={"/contacto"} element={<Contact />} />
        <Route path={"/users/:id"} element={<UserPanel />} />
        <Route path={"/users/:id/saved"} element={<UserSaved />} />
        <Route path={"/users/:id/liked"} element={<UserLiked />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
