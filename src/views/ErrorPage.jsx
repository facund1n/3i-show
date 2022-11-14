import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="px-0 d-flex flex-column min-vh-100">
      <StickyNav />
      <div className="d-flex justify-content-center m-auto">
        <img
          className="img-fluid"
          src="https://tinypic.host/images/2022/11/14/404.png"
          alt="404.png"
          width={"520px"}
        />
      </div>
      <h2 className="text-center">
        Lo sentimos, esta página no está disponible
      </h2>
      <Link className="text-center f-yellow" to="/">
        Volver a la página principal
      </Link>
      <Footer />
    </Container>
  );
};
export default ErrorPage;
