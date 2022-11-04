import StickyNav from "../components/StickyNav";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import SesionButton from "../components/SesionButton";

import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <StickyNav />
      <Container className="px-0 d-flex flex-column min-vh-100">
        <SesionButton />
        <Slider />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
