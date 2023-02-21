import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import NewPost from "./NewPost";

const DeletePostButton = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button
        variant="success"
        size="lg"
        className="my-2"
        onClick={() => setShow(true)}
      >
        NUEVO
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
            <NewPost data={data} />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default DeletePostButton;
