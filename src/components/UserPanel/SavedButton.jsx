import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const SavedButton = ({ userLogged }) => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [countSaved, setCountSaved] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/users/${params.id}/saved/`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(data.map((d) => setCountSaved(d.saved)));
  }, [data]);

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
