import Header from "../components/Header";
import { useState, useEffect } from "react";
import { ProductProps } from "../types/product";
import { fetchProducts } from "../functions/httpFunctions";
import Product from "../components/Product";
import Loading from "../components/Loading";

const Home = () => {
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadFunction = async () => {
      const { response, err } = await fetchProducts({
        product: "all",
        type: "all",
        itemsPerPage: 12,
        page: page
      });

      if (err) {
        setError(true);
        setLoading(false);
        return;
      }
      setTimeout(() => {
        if(response.isLast) setAllLoaded(true);
        setProducts([...products, ...response.products]);
        setLoading(false);
      }, 500);
    };

    setLoading(true);
    loadFunction();
  }, [page]);

  const showProducts = products.map((el) => (
    <Product key={el.id} id={el.id} title={el.title} image={el.image} product={el.product} />
  ));

  return (
    <>
      <Header title="Welcome to F&F" type="Smell and taste buds paradise!" />
      {error ? (
        <div>
          There was a problem loading products. Please refresh the page.
        </div>
      ) : (
        <>
        <div className="productsContainer">
          {showProducts.length !== 0
            ? showProducts
            : loading ? null : "There are no products at the moment, check out later."}
        </div>
        {loading ? <Loading /> : allLoaded ? null : <button onClick={() => {setPage(page + 1)}} className={"loadButton"}>Load more</button>}
        </>
      )}
    </>
  );
};

export default Home;
