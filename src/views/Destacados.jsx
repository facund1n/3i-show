import ContactForm from "../components/Forms/ContactForm";
import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";
import DestacadosMap from "../components/Destacados/DestacadosMap";

const Destacados = () => {
  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <DestacadosMap />
        <Footer />
      </Container>
    </>
  );
};

export default Destacados;
