import { Container, InputGroup, Form, Button } from "react-bootstrap";

const CommentBox = () => {
  return (
    <Container>
      <hr />
      <InputGroup size="lg">
        <Form.Control as="textarea" className="my-2" />
      </InputGroup>
      <div className="d-flex justify-content-end">
        <Button className="btn-lg" variant="warning" type="submit">
          Comentar
        </Button>
      </div>
    </Container>
  );
};

export default CommentBox;
