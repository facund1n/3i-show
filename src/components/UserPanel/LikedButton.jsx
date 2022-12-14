import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const LikedButton = ({ userLogged }) => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [countLiked, setCountLiked] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/users/${params.id}/liked/`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(data.map((d) => setCountLiked(d.liked)));
  }, [data]);

  return (
    <>
      <Link
        to={`/users/${userLogged}/liked`}
        className="btn btn-outline-warning btn-lg my-2"
      >
        Publicaciones que me gustaron{" "}
        <Badge bg="warning" text="dark">
          {countLiked.length}
        </Badge>
      </Link>
    </>
  );
};
export default LikedButton;
