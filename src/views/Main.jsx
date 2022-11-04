import StickyNav from "../components/StickyNav";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import SesionButton from "../components/SesionButton";
import LogoNav from "../components/LogoNav";

import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <LogoNav />

      <Container className="px-0 d-flex flex-column min-vh-100">
        <StickyNav />
        <SesionButton />
        <Slider />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
