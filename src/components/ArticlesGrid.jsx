import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Articles from "./Articles"; // Componente

const ArticlesMapGrid = ({ data }) => {
  return (
    <Container>
      <h1 className="f-yellow">| Destacados</h1>
      <CardGroup>
        <Row xs={2} md={4} lg={5}>
          {data.map((article, i) => (
            <Col sm={4} key={i}>
              <Articles article={article} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default ArticlesMapGrid;
