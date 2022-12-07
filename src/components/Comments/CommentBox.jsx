import { Container, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Cookies from "js-cookie";

const validationSchema = yup.object({
  comment: yup
    .string()
    .min(10, "mínimo 10 carácteres")
    .max(250, "máximo 250 carácteres")
    .required("Escribí algo:"),
});

export default function CommentBox({ userLogged }) {
  /*   const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");
  const [userName, setUser] = useState("");
  const getUrl = window.location.href.split("/").reverse()[0];
  const getUser = Cookies.get("_userName");

  useEffect(() => {
    setUrl(getUrl);
    setUser(userLogged); // ver los nombres de props
  }, []);

  const onSubmit = async (values) => {
    const response = await axios
      .post(`http://localhost:4000/destacados/${url}/newComment`, values)
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(null);
        console.log(err.response.data.message);
        console.log("VALORES ", values);
      });
    if (response) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Container>
      <hr />
      <Form onSubmit={formik.handleSubmit}>
        {formik.touched.comment && formik.errors.comment ? (
          <div className="f-yellow mt-1">{formik.errors.comment}</div>
        ) : null}
        <Form.Group size="lg">
          <Form.Control
            id="comment"
            name="comment"
            as="textarea"
            rows={3}
            className="py-2 my-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button className="btn-lg" variant="warning" type="submit">
            Comentar
          </Button>
        </div>
      </Form>
    </Container>
  ); */
  return <div>commentbox</div>;
}
