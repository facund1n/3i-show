import { Container, Row } from "react-bootstrap";
import Noticia from "./Noticia"; // Componente

// 1.2

const NoticiasGrid = ({ data }) => {
  return (
    <Container>
      <Row xs={2} md={5} lg={5}>
        {data.map((data, i) => (
          <div key={i}>
            <Noticia data={data} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default NoticiasGrid;
