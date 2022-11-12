import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Articles from "./Articles"; // Componente

const ArticlesMapGrid = ({ data }) => {
  return (
    <Container>
      <CardGroup>
        <Row xs={2} md={4} lg={5}>
          {data.map((article) => (
            <Col sm={4}>
              <Articles article={article} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default ArticlesMapGrid;
