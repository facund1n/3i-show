import StickyNav from "./NavBars/StickyNav";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { SavedPostSuccess, SavedPostError } from "../components/Common";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const UserSaved = () => {
  const getUserName = Cookies.get("_auth_state");
  const userNoRegExp = getUserName.replace(/[^a-zA-Z 0-9.]+/g, "");
  const userCleaned = userNoRegExp.slice(4);

  const [data, setData] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  /*   useEffect(async () => {
    await axios.get(`http://localhost:4000/users/${userCleaned}/saved`);
    setData(data);
  }, []);
 */
  return (
    <Container className="px-0 d-flex flex-column min-vh-100">
      <StickyNav />
      <p>SAVED</p>
      {!error && <SavedPostSuccess>{success ? success : ""}</SavedPostSuccess>}
      {!success && <SavedPostError>{error ? error : ""}</SavedPostError>}
      <div>{JSON.stringify(data)}</div>
      <Footer />
    </Container>
  );
};
export default UserSaved;
