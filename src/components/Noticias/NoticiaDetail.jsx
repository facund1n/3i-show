import { Container } from "react-bootstrap";
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";
import CommentBox from "../CommentBox";

// 2.2

const NoticiaDetail = ({ data }) => {
  return (
    <>
      <StickyNav />
      <Container>
        <div>
          <h1>{data.title}</h1>
          <h2>{data.description}</h2>
          <img
            className="img-fluid mb-2"
            style={{ height: "100%", width: "100%" }}
            src={data.imageLg}
            alt={data.altLg}
          />
          <Container>
            <article className="text-justify">{data.descriptionFull}</article>
          </Container>
        </div>
      </Container>
      {/* AGREGAR COMENT BOX */}
      <CommentBox />
      <Footer />
    </>
  );
};

export default NoticiaDetail;
