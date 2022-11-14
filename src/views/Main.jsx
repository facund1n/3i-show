import StickyNav from "../components/NavBars/StickyNav";
import LogoNav from "../components/NavBars/LogoNav";
import Footer from "../components/Footer";

import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Welcome from "../components/Welcome";

import DestacadosMap from "../components/Destacados/DestacadosMap";

import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <LogoNav />
      <StickyNav />
      <Container className="px-0 d-flex flex-column min-vh-100">
        <Welcome />
        <Container className="d-flex justify-content-end b-black">
          <LogIn />
          <Register />
        </Container>
        <Container />
        <Container />
        <DestacadosMap />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
