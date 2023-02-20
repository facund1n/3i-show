import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FormSuccess, FormError } from "../Common";
import axios from "axios";

const DeletePost = ({ data }) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const deleteById = async () => {
    const response = await axios
      .delete(
        `https://3i-show-api-node.vercel.app/articulos/delete/${data._id}`
      )
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(null);
      });
    if (response) {
      setError(null);
      setSuccess(response.data.message);
      setInterval(() => {
        navigate("/users/admin");
        window.location.reload();
      }, 3500);
    }
  };

  return (
    <>
      <b>SEGURO QUIERES ELIMINAR?:</b>
      <br />
      <span>ID: {data._id}</span>
      <br />
      <span>TITULO: {data.title}</span>
      <br />
      <span>SUBTÍTULO: {data.subtitle}</span>
      <br />
      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
      <br />
      <Button variant="danger" onClick={deleteById}>
        BORRAR
      </Button>
    </>
  );
};

export default DeletePost;
