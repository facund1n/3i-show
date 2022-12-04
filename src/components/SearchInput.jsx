import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  inputValue: yup
    .string()
    .min(2, "mínimo 2 carácteres")
    .max(30, "máximo 30 carácteres")
    .required("Requerido"),
});

export default function SearchInput() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const singIn = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const response = await axios
      .post(`http://localhost:4000/search/search?=${values}`)
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(null);
        console.log("Error?", err.response.data.message);
      });
    if (response) {
      setError(null);
      setSuccess(response.data.message);
      setQuery(response.data);
      navigate("/search");
    }
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <Form className="d-flex ms-auto w-100" onSubmit={formik.handleSubmit}>
        <Form.Control
          id="search"
          name="search"
          type="text"
          className="me-2"
          placeholder="Escribe algo..."
          aria-label="Search"
        />
        <Button variant="outline-warning">🔎</Button>
      </Form>
    </>
  );
}
