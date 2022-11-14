import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 2

const Destacado = ({ destacado }) => {
  return (
    <>
      <Link
        to={`destacados/${destacado._id}`}
        style={{ textDecoration: "inherit" }}
      >
        <Card className="mb-2 bg-dark">
          <div variant="dark">
            <Card.Img
              variant="top"
              style={{ height: "230px" }}
              src={destacado.imageSm}
              alt={destacado.altSm}
            />
          </div>
          <div className="m-1" style={{ height: "230px" }} variant="dark">
            <h4>{destacado.title}</h4>
            <article>{destacado.description}</article>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Destacado;
