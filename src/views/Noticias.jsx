import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";
import NoticiasMap from "../components/Noticias/NoticiasMap";

const Noticias = () => {
  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <NoticiasMap />
        <Footer />
      </Container>
    </>
  );
};

export default Noticias;
