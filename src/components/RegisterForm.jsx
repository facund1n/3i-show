import { Button, Form } from "react-bootstrap/";

function LogInForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* TYPE TEXT */}
        <Form.Control type="text" placeholder="Usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* TYPE EMAIL */}
        <Form.Control type="email" placeholder="e-mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* TYPE PASSWORD */}
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Repita Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="warning" type="submit">
          Registrarse
        </Button>
      </div>
    </Form>
  );
}

export default LogInForm;
