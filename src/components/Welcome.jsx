import { Card } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <Card className="image">
        <div className="text-center">
          <Card.Body>
            <Card.Title as="h1">Hola, bienveidos a nuestro sitio.</Card.Title>
            <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </>
  );
}

export default Welcome;
