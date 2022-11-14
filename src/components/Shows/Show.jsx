import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 3

const Show = ({ show }) => {
  return (
    <>
      <Link to={`shows/${show._id}`} style={{ textDecoration: "inherit" }}>
        <Card className="my-1 bg-dark">
          <div style={{ height: "50%" }} variant="dark">
            <Card.Img
              variant="top"
              style={{ height: "230px" }}
              src={show.imageSm}
              alt={show.altSm}
            />
          </div>

          <div
            className="m-1 text-left"
            style={{ height: "230px" }}
            variant="dark"
          >
            <h4>{show.title}</h4>
            <article>{show.description}</article>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Show;
