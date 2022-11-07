import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import RegisterForm from "./RegisterForm";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link className="f-yellow" onClick={() => setShow(true)}>
        Registro
      </Link>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <img
            alt="logo"
            src="/img/logo.png"
            height="20px"
            className="d-block m-0 p-0"
          />
        </Modal.Header>
        <div className="b-grey">
          <Modal.Body>
            <RegisterForm /> {/* COMPONENTE FORMULARIO REGISTRO */}
          </Modal.Body>
          <p>¿YA estás registrado? haz click aquí</p>
        </div>
      </Modal>
    </>
  );
};

export default Register;
