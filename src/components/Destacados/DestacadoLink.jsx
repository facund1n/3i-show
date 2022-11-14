import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 2.3

const DestacadoLink = ({ article }) => {
  return (
    <>
      <Link to={`/products/${article.id}`}>
        <Card className="my-1">
          <Card.Body>
            <Card.Img
              variant="top"
              style={{ height: "100%", width: "100%" }}
              src={article.image}
            />
          </Card.Body>
          <Card.Footer style={{ height: "50%" }}>
            <strong>{article.title}</strong>
            <h4>{article.description}</h4>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
};

export default DestacadoLink;
