import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// 3

const Show = ({ show }) => {
  return (
    <>
      <Link to={`shows/${show._id}`} style={{ textDecoration: "inherit" }}>
        <Container>
          {" "}
          <Card className="bg-dark links mb-2">
            <Row>
              <Col>
                <Card.Img
                  className="img-fluid"
                  /* variant="top" */
                  style={{ height: "250px" }}
                  src={show.imageLg}
                  alt={show.altSm}
                />
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <h1>{show.title}</h1>
                {/* <article>{show.description}</article> */}
              </Col>
            </Row>
          </Card>
        </Container>
      </Link>
    </>
  );
};

export default Show;
