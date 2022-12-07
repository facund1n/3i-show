import StickyNav from "./NavBars/StickyNav";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const UserLiked = () => {
  const getUserName = Cookies.get("_auth_state");
  const userNoRegExp = getUserName.replace(/[^a-zA-Z 0-9.]+/g, "");
  const userCleaned = userNoRegExp.slice(4);
  return (
    <Container className="px-0 d-flex flex-column min-vh-100">
      <StickyNav />
      <p>LIKED</p>

      <Footer />
    </Container>
  );
};
export default UserLiked;
