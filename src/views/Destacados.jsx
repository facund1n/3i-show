import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";
import DestacadosMap from "../components/Destacados/DestacadosMap";

const Destacados = () => {
  return (
    <>
      <StickyNav />

      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <h1 className="f-yellow image my-3 mx-2" id="showsIndex">
          | Destacados
        </h1>
        <DestacadosMap />
        <Footer />
      </Container>
    </>
  );
};

export default Destacados;
