import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// contendor que resguarda las cards con cada producto, le pasamos por props "data" que generó .map de componente ProductListing -> función ObtainData

const Articles = ({ article }) => {
  return (
    <>
      <Link to={`/products/${article.id}`}>
        <Card className="my-1 bg-dark" style={{ height: "95%" }}>
          <Card.Body style={{ height: "50%" }}>
            <Card.Img
              variant="top"
              style={{ height: "100%", width: "100%" }}
              src={article.image}
            />
          </Card.Body>
          <Card.Footer style={{ height: "50%" }}>
            <strong>{article.title}</strong>
            <h4>${article.price}</h4>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
};

export default Articles;
