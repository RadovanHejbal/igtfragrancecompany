import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../functions/httpFunctions";
import { ProductProps, ReviewProps } from "../types/product";
import { useMyContext } from "../contextapi/ContextAPI";
import Header from "../components/Header";
import styles from "./Detail.module.css";
import Review from "../components/Review";

const Details = () => {
  const [error, setError] = useState(false);
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const { id } = useParams();
  const { addProduct, removeProductById, isFavorite } = useMyContext();

  useEffect(() => {
    const loadDetails = async () => {
      const { response, err } = await fetchProductDetail({
        id: id ? parseInt(id) : -1,
      });

      if (err) {
        setError(true);
        return;
      }

      setProduct(response.product);
      setReviews(response.reviews);
    };

    loadDetails();
  }, [id]);

  const clickedSaveButtonHandler = () => {
    if (isFavorite(id)) {
        removeProductById(id);
    }else {
        addProduct(product);
    }
  }

  return (
    <>
      <Header title={product?.title + " " + product?.product} type="" backgroundColor={product?.product === "fragrance" ? "#FF8E63" : "#A8DB3F"} />
      {error ? (
        <div>There was a problem loading details, please refresh the page.</div>
      ) : (
        <><div className={styles.detailsContainer}>
            <img src={product?.image} alt={product?.title} className={styles.image} />
            <div className={styles.infoContainer}>
                <div>
                    <h2 className={styles.title}>{product?.title}</h2>
                    <p className={styles.description}>{product?.description}</p>
                    <p className={styles.price}>{product?.price}€</p>
                </div>
                <button onClick={clickedSaveButtonHandler} className={styles.saveButton}>{isFavorite(id) ? "Remove from favorites" : "Add to favorites"}</button>
            </div>
        </div>
        <div className={styles.reviewsContainer}>
          <h2 className={styles.title}>Reviews</h2>
          <div className={styles.reviewsWrapper}>
            {reviews.map(el => <Review name={el.name} text={el.text} stars={el.stars} />)}
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default Details;
