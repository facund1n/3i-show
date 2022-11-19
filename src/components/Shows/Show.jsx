import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 3

const Show = ({ show }) => {
  return (
    <>
      <Link to={`shows/${show._id}`} style={{ textDecoration: "inherit" }}>
        <Card className="mb-2 border-yellow links">
          <div style={{ height: "50%" }} variant="dark">
            <Card.Img
              variant="top"
              style={{ height: "230px" }}
              src={show.imageSm}
              alt={show.altSm}
            />
          </div>

          <div
            className="mt-2 text-center d-flex align-items-center"
            style={{ height: "200px" }}
          >
            <h4>{show.title}</h4>
            {/* <article>{show.description}</article> */}
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Show;
