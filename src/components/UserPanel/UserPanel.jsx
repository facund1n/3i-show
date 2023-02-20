import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";

import { Container } from "react-bootstrap";

import LikedButton from "./LikedButton";
import SavedButton from "./SavedButton";
import AllPosts from "../CRUD/AllPosts";
import NewPostButton from "../CRUD/NewPostButton";

const UserPanel = ({ userLogged }) => {
  return (
    <>
      <Container className="px-0 d-flex flex-column min-vh-100">
        <StickyNav />
        <SavedButton userLogged={userLogged} />
        <LikedButton userLogged={userLogged} />
        {userLogged === "admin" ? <NewPostButton /> : <span></span>}
        {userLogged === "admin" ? <AllPosts /> : <span></span>}
      </Container>
      <Footer />
    </>
  );
};
export default UserPanel;
