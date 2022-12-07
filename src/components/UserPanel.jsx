import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserPanel = ({ userLogged }) => {
  return (
    <Container className="px-0 d-flex flex-column min-vh-100">
      <StickyNav />
      <p>User Panel</p>
      <Link
        to={`/users/${userLogged}/saved`}
        className="f-yellow btn btn-outline-warning btn-lg my-2"
      >
        Publicaciones Guardadas
      </Link>
      <Link
        to={`/users/${userLogged}/liked`}
        className="f-yellow btn btn-outline-warning btn-lg my-2"
      >
        Publicaciones que me gustaron
      </Link>
      <Footer />
    </Container>
  );
};
export default UserPanel;
