import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Destacado from "./Destacado"; // Componente

// 2

const DestacadosMapGrid = ({ data }) => {
  return (
    <Container>
      <h1 className="f-yellow image" id="destacadoIndex">
        | Destacados
      </h1>
      <CardGroup>
        <Row xs={2} md={4} lg={5}>
          {data.map((data, i) => (
            <Col key={i}>
              <Destacado data={data} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default DestacadosMapGrid;
