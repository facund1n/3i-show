import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 1.3

const Liked = ({ l }) => {
  return (
    <>
      <Container>
        <Link to={`${l[1]}`} style={{ textDecoration: "inherit" }}>
          <Card className="mb-2 bg-dark links" border="black">
            <Card.Img
              className="img-fluid mb-2"
              style={{ height: "150px" }}
              src={l[0].image}
              alt={l[0].alt}
            />
            <div
              className="mt-2 text-center d-flex align-items-center"
              style={{ height: "150px" }}
            >
              <h4>{l[0].title}</h4>
            </div>
          </Card>
        </Link>
      </Container>
    </>
  );
};

export default Liked;
