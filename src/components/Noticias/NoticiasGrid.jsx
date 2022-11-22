import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Noticia from "./Noticia"; // Componente

// 2

const NoticiasGrid = ({ data }) => {
  return (
    <Container>
      <h1 className="f-yellow image" id="noticiasIndex">
        | Noticias
      </h1>
      <CardGroup>
        <Row xs={1} md={2} lg={3}>
          {data.map((noticia, i) => (
            <Col key={i}>
              <Noticia noticia={noticia} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default NoticiasGrid;
