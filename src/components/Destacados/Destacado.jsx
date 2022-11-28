import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 2

const Destacado = ({ data }) => {
  return (
    <>
      <Link to={`destacados/${data._id}`} style={{ textDecoration: "inherit" }}>
        <Card className="mb-2 bg-dark links">
          <div>
            <Card.Img
              variant="top"
              style={{ height: "190px" }}
              src={data.imageSm}
              alt={data.altSm}
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
