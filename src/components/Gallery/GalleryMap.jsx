import { useState, useEffect } from "react";
import Loader from "../Loader";

import GallerySlider from "./GallerySlider";

// 1

const GalleryMap = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("http://localhost:4000/galerias/all")
      .then((res) => res.json())
      .then((json) => setImages(json))
      .then(localStorage.setItem("images", JSON.stringify(images)))
      .finally(() => setIsLoading(false));
    console.log(images); // eslint-disable-next-line
  }, [isLoading]);

  return <>{isLoading ? <Loader /> : <GallerySlider images={images} />}</>;
};

export default GalleryMap;
