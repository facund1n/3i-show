import { Container, ListGroup } from "react-bootstrap";
import Post from "./Post"; // Componente

// 1.2

const Grid = ({ data }) => {
  return (
    <Container>
      <ListGroup>
        {data.map((data, i) => (
          <Post data={data} key={i} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default Grid;
