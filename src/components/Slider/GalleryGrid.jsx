import { Container } from "react-bootstrap";
import Gallery from "./Gallery"; // Componente

// 2

const GalleryGrid = ({ data }) => {
  return (
    <Container>
      <h1 className="f-yellow image" id="showsIndex">
        | Fotos
      </h1>
      {data.map((image, i) => (
        <div key={i}>
          <Gallery image={image} />
        </div>
      ))}
    </Container>
  );
};

export default GalleryGrid;
