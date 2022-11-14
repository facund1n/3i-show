import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Noticia from "./Noticia"; // Componente

// 2

const DestacadosMapGrid = ({ data }) => {
  return (
    <Container>
      <h1 className="f-yellow image" id="noticiasIndex">
        | Noticias
      </h1>
      <CardGroup>
        <Row xs={2} md={3} lg={3}>
          {data.map((noticia, i) => (
            <Col sm={4} key={i}>
              <Noticia noticia={noticia} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default DestacadosMapGrid;
