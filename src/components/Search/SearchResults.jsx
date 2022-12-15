import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import StickyNav from "../NavBars/StickyNav";
import Footer from "../Footer";

const SearchResults = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(""); // recibe valores del input
  // const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(`https://3i-show-api-node.vercel.app/articulos`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  // filtrado (captuta valores del input) - NO ESTÁ FUNCIONAL TODAVÍA
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  /*  const filterHandler = (e) => {
    setFilter(e.target.value);
  }; */

  const results = !search
    ? items
    : items.filter((item) =>
        item.title.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <input
          value={search}
          onChange={searcher} // handler
          type="text"
          placeholder="escriba algo"
          className="form-control"
        ></input>
        {/*         <Form.Select
          aria-label="Default select example"
          className="bg-dark f-yellow"
        >
          <option value="all">Seleccione categoría...</option>
          <option value="destacados">Destacados</option>
          <option value="noticias">Noticias</option>
        </Form.Select> */}

        {!search ? (
          <span>
            escribe algo en el cuadro de búsqueda para ver los resultados.
          </span>
        ) : (
          results.map((item, k) => (
            <Link
              to={`/articulos/${item.category}/${item._id}`}
              key={k}
              style={{ textDecoration: "inherit" }}
            >
              <Card className="my-1">
                <Card.Body className="b-grey">{item.title}</Card.Body>
              </Card>
            </Link>
          ))
        )}
      </Container>
      <Footer />
    </>
  );
};

export default SearchResults;
