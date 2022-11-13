import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Destacado from "./Destacado"; // Componente

const DestacadosMapGrid = ({ data }) => {
  return (
    <Container>
      <h1 className="f-yellow">| Destacados</h1>
      <CardGroup>
        <Row xs={2} md={4} lg={5}>
          {data.map((destacado, i) => (
            <Col sm={4} key={i}>
              <Destacado destacado={destacado} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default DestacadosMapGrid;
