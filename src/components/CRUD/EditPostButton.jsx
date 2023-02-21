import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EditPost from "./EditPost";

const EditPostButton = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button variant="outline-light" onClick={() => setShow(true)}>
        EDITAR
      </Button>
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
            <EditPost data={data} />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default EditPostButton;
