import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../functions/httpFunctions";
import { ProductProps } from "../types/product";
import { colors } from "../variables/colors";
import Product from "../components/Product";
import Loading from "../components/Loading";


// This page is used for catalog of fragrances OR flavors
const Category = ({product}: {product: string}) => {
  const { type } = useParams();
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  console.log("RENDER");

  // function for loading products
  const loadFunction = async (reset: boolean) => {
    setLoading(true);
    const { response, err } = await fetchProducts({
      product: product,
      type: type ? type : "all",
      itemsPerPage: 12,
      page: reset ? 1 : page
    });

    if (err) {
      setLoading(false);
      setError(true);
      return;
    }
    setTimeout(() => {
      if(reset) setProducts(response.products);
      else setProducts([...products, ...response.products]);

      if(response.isLast) setAllLoaded(true);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadFunction(false);
  }, [page]);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setAllLoaded(false);
    loadFunction(true);
  }, [product, type])

  const showProducts = products.map(el => <Product key={el.id} id={el.id} title={el.title} image={el.image} product={el.product} />)

  return (
    <>
      <Header title={product === "fragrance" ? "Fragrances" : "Flavors"} type={type ? type : "all"} backgroundColor={product === "fragrance" ? colors.fragrance : colors.flavor} />
      {error ? (
        <div>
          There was a problem loading products. Please refresh the page.
        </div>
      ) : (
        <>
        <div className="productsContainer">{showProducts.length !== 0 ? showProducts : loading ? null : "There are no products at the moment, check out later."}</div>
        {loading ? <Loading /> : allLoaded ? null : <button onClick={() => {setPage(page + 1)}} className={"loadButton"}>Load more</button>}
        </>
      )}
    </>
  );
};

export default Category;
