import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// contendor que resguarda las cards con cada producto, le pasamos por props "data" que generó .map de componente ProductListing -> función ObtainData

const Articles = ({ destacado }) => {
  return (
    <>
      <Link
        to={`destacados/${destacado._id}`}
        style={{ textDecoration: "inherit" }}
      >
        <Card className="my-1 bg-dark">
          <div style={{ height: "50%" }} action variant="dark">
            <Card.Img
              variant="top"
              style={{ height: "230px" }}
              src={destacado.imageSm}
              alt={destacado.altSm}
            />
          </div>

          <div
            className="m-1 text-left min-vh-25"
            style={{ height: "230px" }}
            action
            variant="dark"
          >
            <h4>{destacado.title}</h4>
            <article>{destacado.description}</article>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Articles;
