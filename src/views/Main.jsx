import StickyNav from "../components/NavBars/StickyNav";
import LogoNav from "../components/NavBars/LogoNav";
import Footer from "../components/Footer";

import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Welcome from "../components/Welcome";

import DestacadosMap from "../components/Destacados/DestacadosMap";
import NoticiasMap from "../components/Noticias/NoticiasMap";
import ShowsMap from "../components/Shows/ShowsMap";

import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <LogoNav />
      <StickyNav />
      <Container className="px-0 d-flex flex-column min-vh-100">
        <Container className="d-flex justify-content-end my-2">
          <LogIn />
          <Register />
        </Container>
        <Welcome />
        <Container />
        <Container />
        <DestacadosMap />
        <NoticiasMap />
        <ShowsMap />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
