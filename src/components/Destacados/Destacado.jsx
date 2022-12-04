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
              style={{ height: "190px" }}
              src={data.image}
              alt={data.alt}
            />
          </div>
          <div
            className="mt-2 text-center d-flex align-items-center"
            style={{ height: "200px" }}
          >
            <h4>{data.title}</h4>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Destacado;
