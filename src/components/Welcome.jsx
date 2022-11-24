import { Card } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <div className="mb-2">
        <div className="text-center">
          <Card.Body className="py-5">
            <Card.Title as="h1" className="border-black">
              Bienvenidos al mundo del Metal
            </Card.Title>
            <Card.Text as="h5" className="border-black">
              Tu inyección diaria de contenidos refentes del metal/hard rock
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </>
  );
}

export default Welcome;
