import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const UserPanel = () => {
  const getUserName = Cookies.get("_auth_state");
  const userNoRegExp = getUserName.replace(/[^a-zA-Z 0-9.]+/g, "");
  const userCleaned = userNoRegExp.slice(4);
  return (
    <Container className="px-0 d-flex flex-column min-vh-100">
      <StickyNav />
      <p>User Panel</p>
      <Link
        to={`/users/${userCleaned}/saved`}
        className="f-yellow btn btn-outline-warning btn-lg my-2"
      >
        Publicaciones Guardadas
      </Link>
      <Link
        to={`/users/${userCleaned}/liked`}
        className="f-yellow btn btn-outline-warning btn-lg my-2"
      >
        Publicaciones que me gustaron
      </Link>
      <Footer />
    </Container>
  );
};
export default UserPanel;
