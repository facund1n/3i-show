import { CardGroup, Col, Container } from "react-bootstrap";
import Show from "./Show"; // Componente

// 2

const DestacadosMapGrid = ({ data }) => {
  return (
    <Container>
      <h1 className="f-yellow image" id="showsIndex">
        | Shows
      </h1>
      <CardGroup>
        <Col>
          {data.map((show, i) => (
            <div key={i}>
              <Show show={show} />
            </div>
          ))}
        </Col>
      </CardGroup>
    </Container>
  );
};

export default DestacadosMapGrid;
