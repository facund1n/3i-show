import { useState, useEffect } from "react";
import Loader from "../Loader";

import Grid from "./Grid";

// 1.1

const AllPosts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("https://3i-show-api-node.vercel.app/articulos/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <Grid data={data} />}</>;
};

export default AllPosts;
