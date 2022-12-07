import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { SavedPostSuccess, SavedPostError } from "./Common";
import Cookies from "js-cookie";

const SavePosts = () => {
  const getUserName = Cookies.get("_auth_state");
  const userNoRegExp = getUserName.replace(/[^a-zA-Z 0-9.]+/g, "");
  const userCleaned = userNoRegExp.slice(4);

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [currentUrlId, setCurrentUrlId] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentUrlId(window.location.pathname);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .patch(`http://localhost:4000/users/${userCleaned}/save`, {
        saved: currentUrlId,
      })
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(null);
        console.log("Error?", err.response.data.message);
        return;
      });
    if (response) {
      setError(null);
      setSuccess(response.data.message);
      return;
    }
  };

  return (
    <>
      {!error && <SavedPostSuccess>{success ? success : ""}</SavedPostSuccess>}
      {!success && <SavedPostError>{error ? error : ""}</SavedPostError>}
      <Form onSubmit={handleSubmit}>
        <Button type="submit" variant="warning">
          GUARDAR
        </Button>
      </Form>
    </>
  );
};

export default SavePosts;
