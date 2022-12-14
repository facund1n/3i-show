import { useState, useEffect } from "react";
import Loader from "../Loader";

import GallerySlider from "./GallerySlider";

// 1

const GalleryMap = () => {
  // eslint-disable-next-line
  const [imagenes, setImagenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("https://3i-show-api-node.vercel.app/galerias/all")
      .then((res) => res.json())
      .then((json) => setImagenes(json))
      .then(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <GallerySlider imagenes={imagenes} />}</>;
};

export default GalleryMap;
