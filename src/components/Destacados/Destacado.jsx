import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 1.3

const Destacado = ({ data }) => {
  return (
    <>
      <Link
        to={`/articulos/destacados/${data._id}`}
        style={{ textDecoration: "inherit" }}
      >
        <Card className="mb-2 bg-dark links" border="black">
          <div>
            <Card.Img
              variant="top"
              style={{ height: "150px" }}
              src={data.image}
              alt={data.alt}
            />
          </div>
          <Card.Body>
            <Card.Title
              className="mt-2 text-center d-flex align-items-center"
              style={{ height: "120px" }}
            >
              <h6>{data.title}</h6>
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Destacado;
