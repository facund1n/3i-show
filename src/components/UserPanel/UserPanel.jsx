import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";

import { Container } from "react-bootstrap";

import LikedButton from "./LikedButton";
import SavedButton from "./SavedButton";

const UserPanel = ({ userLogged }) => {
  return (
    <>
      <Container className="px-0 d-flex flex-column min-vh-100">
        <StickyNav />
        <SavedButton userLogged={userLogged} />
        <LikedButton userLogged={userLogged} />
      </Container>
      <Footer />
    </>
  );
};
export default UserPanel;
