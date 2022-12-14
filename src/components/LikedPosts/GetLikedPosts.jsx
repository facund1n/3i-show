import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LikedPostGrid from "./LikedPostGrid";
import Loader from "../Loader";

const GetLikedPosts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader
  const params = useParams();

  useEffect(() => {
    fetch(`https://3i-show-api-node.vercel.app/users/${params.id}/liked/`)
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
