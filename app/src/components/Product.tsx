import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { colors } from "../variables/colors";

type ProductProps = {
    title: string;
    image: string;
    id: number;
    product: string;
}

const Product: React.FC<ProductProps> = ({title, image, id, product}) => {
    return <Link to={`/details/${id}`} className={styles.productWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.info} style={{backgroundColor: product == "fragrance" ? colors.fragrance : colors.flavor}}>
            {title}
        </div>
    </Link>
}

export default Product;