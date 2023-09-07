import Product from "../components/Product";
import { useMyContext } from "../contextapi/ContextAPI";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Saved = () => {
  const { savedProducts } = useMyContext();

  return (
    <>
      <Header title="Favorites" type="All Products" />
      <div className="productsContainer">
        {savedProducts.length === 0 ? (
          <div>
            You dont have any products saved yet,{" "}
            <Link to={"/"} style={{ color: "blue", fontWeight: "bold" }}>
              lets explore
            </Link>
          </div>
        ) : (
          savedProducts.map((el) => (
            <Product
              key={el.id}
              title={el.title}
              image={el.image}
              id={el.id}
              product={el.product}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Saved;
