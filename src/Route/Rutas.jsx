import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";

import Main from "../views/Main";
import DestacadoDetailMap from "../components/Destacados/DestacadoDetailMap";
import Destacados from "../views/Destacados";
import NoticiaDetailMap from "../components/Noticias/NoticiaDetailMap";
import Noticias from "../views/Noticias";
import Gallery from "../views/Gallery";
import ShowDetailMap from "../components/Shows/ShowDetailMap";
import CommentBox from "../components/Comments/CommentBox";
import Register from "../views/Register";
import Login from "../views/Login";
import Contact from "../views/Contact";
import UserPanel from "../components/UserPanel/UserPanel";
import GetSavedPosts from "../components/SavedPost/GetSavedPosts";
import GetLikedPosts from "../components/LikedPosts/GetLikedPosts";
import SearchResults from "../components/Search/SearchResults";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Shows from "../views/Shows";

const Rutas = () => {
  const [auth, setAuth] = useState();
  const [userLogged, setUserLogged] = useState();
  const authState = Cookies.get("_auth"); // token
  const getUserName = Cookies.get("_auth_state"); // usuarios

  useEffect(() => {
    if (authState && getUserName) {
      const userNoRegExp = getUserName.replace(/[^a-zA-Z 0-9.]+/g, "");
      const userCleaned = userNoRegExp.slice(4);
      !authState ? setAuth(false) : setAuth(true);
      !getUserName ? setUserLogged() : setUserLogged(userCleaned);
    }
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
          path={"/articulos/destacados"}
          element={<Destacados auth={auth} userLogged={userLogged} />}
        />
        <Route
          path={"/articulos/noticias/:id"}
          element={<NoticiaDetailMap auth={auth} userLogged={userLogged} />}
        />{" "}
        <Route
          path={"/articulos/noticias"}
          element={<Noticias auth={auth} userLogged={userLogged} />}
        />
        <Route
          path={"/fotos"}
          element={<Gallery auth={auth} userLogged={userLogged} />}
        />
        <Route
          path={"/shows"}
          element={<Shows auth={auth} userLogged={userLogged} />}
        />
        <Route
          path={"/articulos/shows/:id"}
          element={<ShowDetailMap auth={auth} userLogged={userLogged} />}
        />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/commentbox"} element={<CommentBox />} />
        <Route path={"/contacto"} element={<Contact />} />
        <Route
          path={"/users/:id"}
          element={<UserPanel userLogged={userLogged} />}
        />
        <Route
          path={"/users/:id/saved"}
          element={<GetSavedPosts userLogged={userLogged} />}
        />
        <Route
          path={"/users/:id/liked"}
          element={<GetLikedPosts userLogged={userLogged} />}
        />
        <Route path={"/busqueda"} element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
