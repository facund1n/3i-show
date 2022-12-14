import { useState, useEffect } from "react";

import LikedPostGrid from "./LikedPostGrid";
import Loader from "../Loader";

const GetLikedPosts = ({ userLogged }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch(`https://3i-show-api-node.vercel.app/users/${userLogged}/liked/`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((data, k) => <LikedPostGrid data={data.liked} key={k} />)
      )}
    </>
  );
};

export default GetLikedPosts;
