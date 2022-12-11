import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LikedPostGrid from "./LikedPostGrid";
import Loader from "../Loader";

const GetLikedPosts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/users/${params.id}/liked/`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : data.map((l) => <LikedPostGrid l={l.liked} />)}
    </>
  );
};

export default GetLikedPosts;
