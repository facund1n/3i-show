import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DeletePost from "./DeletePost";

const DeletePostButton = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="danger" onClick={() => setShow(true)}>
        BORRAR
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
            <DeletePost data={data} />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default DeletePostButton;
