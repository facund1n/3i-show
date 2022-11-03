import Header from "../components/Header";
import StickyNav from "../components/StickyNav";
import Carousel from "../components/Carousel";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <StickyNav />
      <Container className="px-0 d-flex flex-column min-vh-100">
        <Header />
        <Landing />
        <Carousel />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
