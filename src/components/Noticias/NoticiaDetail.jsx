import { Container } from "react-bootstrap";
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";
import CommentBox from "../Comments/CommentBox";

// 2.2

const NoticiaDetail = ({ data }) => {
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
            className="img-fluid mb-2"
            style={{ height: "100%", width: "100%" }}
            src={data.image}
            alt={data.alt}
          />
          <br />
        </div>
        <Container>
          <hr />
          <h1>{data.subtitle}</h1>
          <h3>{data.description}</h3>
          <article className="font-roboto">{data.body}</article>
        </Container>
        <br />
      </Container>
      {/* AGREGAR COMENT BOX */}
      <CommentBox />
      <Footer />
    </>
  );
};

export default NoticiaDetail;
