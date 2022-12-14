import { CardGroup, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Liked from "./Liked"; // Componente
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";

// 1.2

const LikedPostGrid = ({ data }) => {
  const [likedExist, setDataExist] = useState(false);
  useEffect(() => {
    data ? setDataExist(true) : setDataExist(false);
    // eslint-disable-next-line
  }, [likedExist]);

  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <h3>Liked:</h3>
        {data ? (
          <CardGroup>
            <Row xs={1} md={3} lg={4}>
              {data.map((data, k) => (
                <Col key={k}>
                  <Liked data={data} />
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
