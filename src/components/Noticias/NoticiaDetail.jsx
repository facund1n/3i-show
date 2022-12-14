import { Container } from "react-bootstrap";
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";
// import CommentBox from "../Comments/CommentBox";
import SavePosts from "../SavedPost/SavePosts";
import LikePosts from "../LikedPosts/LikePosts";

// 2.2

const NoticiaDetail = ({ data, auth, userLogged }) => {
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
        {auth ? <SavePosts userLogged={userLogged} data={data} /> : undefined}
        {auth ? <LikePosts userLogged={userLogged} data={data} /> : undefined}
        <Container>
          <hr />
          <h1>{data.subtitle}</h1>
          <article className="font-roboto">{data.body}</article>
        </Container>
        <br />
        {/*   {auth ? <CommentBox userLogged={userLogged} /> : undefined} */}
      </Container>
      <Footer />
    </>
  );
};

export default NoticiaDetail;
