import { useState, useEffect } from "react";
import Loader from "../Loader";

import DestacadosGrid from "./DestacadosGrid";

// 1.1

const DestacadosMap = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("https://3i-show-api-node.vercel.app/articulos/destacados/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <DestacadosGrid data={data} />}</>;
};

export default DestacadosMap;
