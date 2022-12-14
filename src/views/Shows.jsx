import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";

import ShowsMap from "../components/Shows/ShowsMap";

const Shows = () => {
  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <ShowsMap />
        <Footer />
      </Container>
    </>
  );
};

export default Shows;
