import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const SearchResults = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(""); // recibe valores del input

  useEffect(() => {
    fetch(`http://localhost:4000/articulos`)
      .then((res) => res.json())
      .then((json) => setItems(json));
    //  .finally(() => setIsLoading(false));
  }, []);

  // filtrado (captuta valores del input)
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const results = !search
    ? items
    : items.filter((item) =>
        item.title.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <>
      <input
        value={search}
        onChange={searcher} // handler
        type="text"
        placeholder="escriba algo"
        className="form-control"
      ></input>
      <div>
        {results.map((item, k) => (
          <Link>
            <Card key={k}>
              <Card.Body className="bg-dark">{item.title}</Card.Body>
            </Card>
          </Link>
        ))}
        {console.log("results: ", results)}
      </div>
    </>
  );
};

export default SearchResults;
