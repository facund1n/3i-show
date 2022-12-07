import StickyNav from "../components/NavBars/StickyNav";
import LogoNav from "../components/NavBars/LogoNav";
import Footer from "../components/Footer";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import LogOut from "../components/LogOut";
import Welcome from "../components/Welcome";
import NoticiasMap from "../components/Noticias/NoticiasMap";
import ShowsMap from "../components/Shows/ShowsMap";
import GalleryMap from "../components/Gallery/GalleryMap";
import DestacadosMap from "../components/Destacados/DestacadosMap";

import { Container } from "react-bootstrap";

const Main = ({ auth, userLogged }) => {
  return (
    <>
      <LogoNav />
      <StickyNav />
      <Container>
        <Container className="px-0 d-flex flex-column min-vh-100">
          <Container className="d-flex justify-content-end mt-1">
            {auth ? (
              <>
                <LogOut userLogged={userLogged} />
              </>
            ) : (
              <>
                <LogIn />
                <Register />
              </>
            )}
          </Container>
          <div className="image3 main-background my-1">
            <Welcome />
            <h1 className="f-yellow image my-3 mx-2" id="showsIndex">
              | Destacados
            </h1>
            <DestacadosMap />
            <h1 className="f-yellow image my-3 mx-2" id="showsIndex">
              | Noticias
            </h1>
            <NoticiasMap />
            <h1 className="f-yellow image my-3 mx-2" id="showsIndex">
              | Fotos
            </h1>
            <GalleryMap />
            <h1 className="f-yellow image my-3 mx-2" id="showsIndex">
              | Shows
            </h1>
            <ShowsMap />
            <Footer />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Main;
