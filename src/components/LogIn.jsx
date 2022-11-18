import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import LogInForm from "./LogInForm";

const LogIn = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link
        className="f-yellow"
        onClick={() => setShow(true)}
        style={{ textDecoration: "inherit" }}
      >
        INICIAR SESIÓN
      </Link>
      <div className="f-yellow mx-1"> | </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="image3"></Modal.Header>
        <div className="image2">
          <Modal.Body>
            <LogInForm />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default LogIn;
