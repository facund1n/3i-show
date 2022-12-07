import { useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";

export default SavePost = ({ userLogged }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  async function getUser() {
    try {
      const response = await axios.get(
        `http://localhost:4000/users/${userLogged}/saved`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return <div>GET POSTS</div>;
};
