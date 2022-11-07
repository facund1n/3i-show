import StickyNav from "../components/StickyNav";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import LogoNav from "../components/LogoNav";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <LogoNav />
      <Container className="px-0 d-flex flex-column min-vh-100">
        <StickyNav />
        <Container className="d-flex justify-content-end">
          <LogIn /> <Register />
        </Container>
        <Slider />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
