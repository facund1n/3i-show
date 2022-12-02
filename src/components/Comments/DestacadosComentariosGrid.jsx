import { Col, Container, Row } from "react-bootstrap";
import Comentarios from "./Comentarios"; // Componente

// 2

const DestacadosMapGrid = ({ data }) => {
  return (
    <Container>
      <h1>Comentarios:</h1>
      {!data ?? <span>no hay comentarios</span>}
    </Container>
  );
};

export default DestacadosMapGrid;
