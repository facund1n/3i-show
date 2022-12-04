import { CardGroup, Container, Row } from "react-bootstrap";
import Show from "./Show"; // Componente

// 2

const DestacadosMapGrid = ({ data }) => {
  return (
    <Container>
      <CardGroup>
        <Row sm={1} md={3} lg={5}>
          {data.map((show, i) => (
            <div key={i}>
              <Show show={show} />
            </div>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default DestacadosMapGrid;
