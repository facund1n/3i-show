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
        <Card className="mb-2 bg-dark links">
          <div>
            <Card.Img
              variant="top"
              style={{ height: "190px" }}
              src={destacado.imageSm}
              alt={destacado.altSm}
            />
          </div>
          <div
            className="mt-2 text-center d-flex align-items-center"
            style={{ height: "200px" }}
          >
            <h4>{destacado.title}</h4>
            {/* <article>{destacado.description}</article> */}
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Destacado;
