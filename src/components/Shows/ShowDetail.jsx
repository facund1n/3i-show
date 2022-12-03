import { Container } from "react-bootstrap";
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";
import CommentBox from "../Comments/CommentBox";

// 2.2

const ShowDetail = ({ data }) => {
  return (
    <>
      <StickyNav />
      <Container className="b-black">
        <br />
        <div className="text-center">
          <div className="image3 py-4">
            <h1>{data.title}</h1>
          </div>
          <br />
          <img
            className="img-fluid mb-2 px-4" // se coloca padding por tamaño de img
            style={{ height: "100%", width: "100%" }}
            src={data.imageLg}
            alt={data.altLg}
          />
        </div>
        <br />
        <Container>
          <hr />
          <h3>{data.description}</h3>
          <article className="font-roboto">{data.descriptionFull}</article>
        </Container>
        <br />
      </Container>
      {/* AGREGAR COMENT BOX */}
      <CommentBox />
      <Footer />
    </>
  );
};

export default ShowDetail;
