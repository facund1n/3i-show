import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// 3

const Show = ({ show }) => {
  return (
    <>
      {/* <Link to={`shows/${show._id}`} style={{ textDecoration: "inherit" }}> */}
      <Container>
        <Card className="bg-dark mb-2">
          <Row>
            <Col>
              <Card.Img
                className="img-fluid"
                style={{ height: "250px" }}
                src={show.imageLg}
                alt={show.altSm}
              />
            </Col>
            <Col className="align-self-center">
              <h1>{show.title}</h1>
              <article>{show.description}</article>
              <span>
                Tickets en:{" "}
                <a href={show.ticketsUrl} className="f-yellow">
                  {show.ticketsUrl}
                </a>
              </span>
            </Col>
          </Row>
        </Card>
      </Container>
      {/* </Link> */}
    </>
  );
};

export default Show;
