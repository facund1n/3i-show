import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { LikeSuccess, LikeError } from "../Common";

const SavePosts = ({ userLogged }) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [currentUrlId, setCurrentUrlId] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentUrlId(window.location.pathname);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .patch(`http://localhost:4000/users/${userLogged}/like`, {
        liked: currentUrlId,
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
      {!error && <LikeSuccess>{success ? success : ""}</LikeSuccess>}
      {!success && <LikeError>{error ? error : ""}</LikeError>}
      <Form onSubmit={handleSubmit}>
        <Button type="submit" variant="warning" className="mb-2">
          like 👍
        </Button>
      </Form>
    </>
  );
};

export default SavePosts;
