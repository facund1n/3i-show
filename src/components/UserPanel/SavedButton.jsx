import { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const SavedButton = ({ userLogged }) => {
  const [data, setData] = useState([]);
  const [countSaved, setCountSaved] = useState("");

  useEffect(() => {
    fetch(`https://3i-show-api-node.vercel.app/users/${userLogged}/saved/`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(data.map((d) => setCountSaved(d.saved)));
    // eslint-disable-next-line
  }, [data, countSaved]);

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
