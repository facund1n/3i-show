import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { SavedPostSuccess, SavedPostError } from "../Common";

const SavePosts = ({ userLogged, data }) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [currentUrlId, setCurrentUrlId] = useState(window.location.pathname);
  const [fullPost, setFullPost] = useState(data);
  useEffect(() => {
    setCurrentUrlId(window.location.pathname);
    setFullPost([data, currentUrlId]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .patch(`http://localhost:4000/users/${userLogged}/save`, {
        saved: fullPost,
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
        <Button type="submit" variant="warning" className="mb-2">
          GUARDAR
        </Button>
      </Form>
    </>
  );
};

export default SavePosts;
