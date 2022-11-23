import StickyNav from "../components/NavBars/StickyNav";
import LogoNav from "../components/NavBars/LogoNav";
import Footer from "../components/Footer";

import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Welcome from "../components/Welcome";

/* import DestacadosMap from "../components/Destacados/DestacadosMap"; */
import NoticiasMap from "../components/Noticias/NoticiasMap";
import ShowsMap from "../components/Shows/ShowsMap";
import GalleryMap from "../components/Gallery/GalleryMap";
import SliderMap from "../components/Slider/SliderMap";

import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <LogoNav />
      <StickyNav />
      <Container>
        <Container className="px-0 d-flex flex-column min-vh-100">
          <Container className="d-flex justify-content-end mt-1">
            <LogIn />
            <Register />
          </Container>
          <div className="image3 main-background my-1">
            <Welcome />
            <SliderMap />
            {/* <DestacadosMap /> */}
            <NoticiasMap />
            <GalleryMap />
            <ShowsMap />
            <Footer />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Main;
