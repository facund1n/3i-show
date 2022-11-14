import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Show from "./Show"; // Componente

// 2

const DestacadosMapGrid = ({ data }) => {
  return (
    <Container>
      <h1 className="f-yellow image" id="showsIndex">
        | Shows
      </h1>
      <CardGroup>
        <Row xs={2} md={4} lg={5}>
          {data.map((show, i) => (
            <Col sm={4} key={i}>
              <Show show={show} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default DestacadosMapGrid;
