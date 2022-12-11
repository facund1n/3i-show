import { CardGroup, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Liked from "./Liked"; // Componente
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";

// 1.2

const LikedPostGrid = ({ l }) => {
  const [likedExist, setDataExist] = useState(false);
  console.log("GRID LIKED: ", l, typeof l);
  useEffect(() => {
    l ? setDataExist(true) : setDataExist(false);
  }, [likedExist]);

  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <h3>Liked:</h3>
        {l ? (
          <CardGroup>
            <Row xs={1} md={3} lg={4}>
              {l.map((l, i) => (
                <Col key={i}>
                  <Liked l={l} />
                </Col>
              ))}
            </Row>
          </CardGroup>
        ) : (
          <span>No hay Likes.</span>
        )}
        <Footer />
      </Container>
    </>
  );
};

export default LikedPostGrid;
