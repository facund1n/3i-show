import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { FormSuccess, FormError } from "../Common";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default SavePost = () => {
  const getUserName = Cookies.get("_auth_state");
  if (getUserName) {
    const userNoRegExp = getUserName.replace(/[^a-zA-Z 0-9.]+/g, "");
    const userCleaned = userNoRegExp.slice(4);
  } else {
  }

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  async function getUser() {
    try {
      const response = await axios.get(
        `http://localhost:4000/users/${userCleaned}/saved`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return <div>GET POSTS</div>;
};
