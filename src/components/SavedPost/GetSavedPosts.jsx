import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SavedPostGrid from "./SavedPostGrid";
import Loader from "../Loader";

const GetSavedPosts = ({ userLogged }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/users/${params.id}/saved/`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((d, k) => <SavedPostGrid d={d.saved} key={k} />)
      )}
    </>
  );
};

export default GetSavedPosts;
