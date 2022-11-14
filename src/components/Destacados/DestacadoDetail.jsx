import { Container } from "react-bootstrap";
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";

const DestacadoDetail = ({ data }) => {
  return (
    <>
      <StickyNav />
      <Container>
        <div>
          <h1>{data.title}</h1>
          <h2>{data.description}</h2>
          <img
            className="img-fluid"
            style={{ height: "100%", width: "100%" }}
            src={data.imageLg}
            alt={data.altLg}
          />
          <article>{data.descriptionFull}</article>
        </div>
      </Container>
      {/* AGREGAR COMENT BOX */}
      <Footer />
    </>
  );
};

export default DestacadoDetail;
