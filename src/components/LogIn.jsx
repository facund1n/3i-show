import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import LogInForm from "./Forms/LogInForm";

const LogIn = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="f-yellow links" onClick={() => setShow(true)}>
        INICIAR SESIÓN
      </div>
      <div className="f-yellow mx-1"> | </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="banner">
          <img
            alt="logo"
            src="/img/logo.png"
            height="20px"
            className="d-block m-0 p-0"
          />
        </Modal.Header>
        <div className="b-black">
          <Modal.Body>
            <LogInForm />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default LogIn;
