// import axios from "axios";
import { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const SavedButton = ({ userLogged }) => {
  const [saved, setSaved] = useState([]);
  const [countSaved, setCountSaved] = useState("");

  /*   const setCounter = async () => {
    const getSavedPost = await axios
      .get(`https://3i-show-api-node.vercel.app/users/${userLogged}/saved/`)
      .then((response) => {
        setSaved(response.data);
      })
      .finally(saved.map((s) => setCountSaved(s.saved)));
  };
 */

  useEffect(() => {
    fetch(`https://3i-show-api-node.vercel.app/users/${userLogged}/saved/`)
      .then((res) => res.json())
      .then((json) => setSaved(json))
      .then(saved.map((s) => setCountSaved(s.saved)));
    // eslint-disable-next-line
  }, [saved.length]);

  return (
    <>
      <Link
        to={`/users/${userLogged}/saved`}
        className="btn btn-outline-warning btn-lg my-2"
      >
        Publicaciones Guardadas{" "}
        <Badge bg="warning" text="dark">
          {countSaved.length}
        </Badge>
      </Link>
    </>
  );
};
export default SavedButton;
