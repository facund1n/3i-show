import { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const LikedButton = ({ userLogged }) => {
  const [data, setData] = useState([]);
  const [countLiked, setCountLiked] = useState("");

  useEffect(() => {
    fetch(`https://3i-show-api-node.vercel.app/users/${userLogged}/liked/`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(data.map((d) => setCountLiked(d.liked)));
    // eslint-disable-next-line
  }, [data, countLiked]);

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
