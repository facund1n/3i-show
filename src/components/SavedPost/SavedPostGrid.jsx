import { CardGroup, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Saved from "./Saved"; // Componente
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";

// 1.2

const SavedPostGrid = ({ data }) => {
  const [dataExist, setDataExist] = useState();
  useEffect(() => {
    data ? setDataExist(true) : setDataExist(false);
    // eslint-disable-next-line
  }, [dataExist]);

  return (
    <>
      <StickyNav />
      <Container className="mt-3 d-flex flex-column min-vh-100">
        <h3>Post Guardados:</h3>
        {dataExist ? (
          <CardGroup>
            <Row xs={1} md={3} lg={5}>
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
      </Container>
      <Footer />
    </>
  );
};

export default SavedPostGrid;
