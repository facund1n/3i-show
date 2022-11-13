import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ArticleDetail from "./ArticleDetail";

//muestra 1 solo producto por ID

const ProductMap = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/articles/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  return <>{isLoading ? <Loader /> : <ArticleDetail data={data} />}</>;
};

export default ProductMap;
