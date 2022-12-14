import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";
import GalleryMap from "../components/Gallery/GalleryMap";

const Gallery = () => {
  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <h1 className="f-yellow image my-3 mx-2" id="showsIndex">
          | Fotos
        </h1>
        <GalleryMap />
        <Footer />
      </Container>
    </>
  );
};

export default Gallery;
