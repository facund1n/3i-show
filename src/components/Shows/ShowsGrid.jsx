import { CardGroup, Container, Row } from "react-bootstrap";
import Show from "./Show"; // Componente

// 2

const DestacadosMapGrid = ({ data }) => {
  return (
    <Container>
      <CardGroup>
        <Row sm={1} md={3} lg={5}>
          {data.map((data, i) => (
            <div key={i}>
              <Show data={data} />
            </div>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default DestacadosMapGrid;
