import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";
import GalleryMap from "../components/Gallery/GalleryMap";

const Gallery = () => {
  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <GalleryMap />
        <Footer />
      </Container>
    </>
  );
};

export default Gallery;
