import { CardGroup, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Saved from "./Saved"; // Componente
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";

// 1.2

const SavedPostGrid = ({ d }) => {
  const [dataExist, setDataExist] = useState(false);
  console.log("GRID DATA: ", d, typeof d);
  useEffect(() => {
    d ? setDataExist(true) : setDataExist(false);
  }, [dataExist]);

  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <h3>Post Guardados:</h3>
        {d ? (
          <CardGroup>
            <Row xs={1} md={3} lg={4}>
              {d.map((d, i) => (
                <Col key={i}>
                  <Saved d={d} />
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
