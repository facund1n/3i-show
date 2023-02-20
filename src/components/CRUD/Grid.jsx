import { ListGroup } from "react-bootstrap";
import Post from "./Post"; // Componente

// 1.2

const Grid = ({ data }) => {
  return (
    <ListGroup>
      {data.map((data, i) => (
        <Post data={data} key={i} />
      ))}
    </ListGroup>
  );
};

export default Grid;
