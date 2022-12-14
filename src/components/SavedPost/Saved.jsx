import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 1.3

const Saved = ({ data }) => {
  return (
    <>
      <Container>
        <Link to={`${data[1]}`} style={{ textDecoration: "inherit" }}>
          <Card className="mb-2 bg-dark links" border="black">
            <Card.Img
              className="img-fluid mb-2"
              style={{ height: "150px" }}
              src={data[0].image}
              alt={data[0].alt}
            />
            <div
              className="mt-2 text-center d-flex align-items-center"
              style={{ height: "150px" }}
            >
              <h4>{data[0].title}</h4>
            </div>
          </Card>
        </Link>
      </Container>
    </>
  );
};

export default Saved;
