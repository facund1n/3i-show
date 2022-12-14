import { CardGroup, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Saved from "./Saved"; // Componente
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";

// 1.2

const SavedPostGrid = ({ data }) => {
  const [dataExist, setDataExist] = useState(false);
  useEffect(() => {
    data ? setDataExist(true) : setDataExist(false);
    // eslint-disable-next-line
  }, [dataExist]);

  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <h3>Post Guardados:</h3>
        {data ? (
          <CardGroup>
            <Row xs={1} md={3} lg={4}>
              {data.map((data, i) => (
                <Col key={i}>
                  <Saved data={data} />
                </Col>
              ))}
            </Row>
          </CardGroup>
        ) : (
          <span>No hay post guardados.</span>
        )}
        <Footer />
      </Container>
    </>
  );
};

export default SavedPostGrid;
