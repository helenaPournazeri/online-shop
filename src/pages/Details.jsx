import { useParams } from "react-router-dom"
import Loader from "../components/Loader";
import { useProductDetails } from "../context/ProductContext";
import { TbCategory } from "react-icons/tb";
import { IoPricetags } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./detail.module.css"

function Details() {

  const {id} = useParams()
  const productDetail = useProductDetails(+id);
  if (!productDetail) return <Loader />

  const {image, title, description, price, category} = productDetail;

  return (

    <div className={styles.container}>
      <img src={image} alt="" />
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.category}>
          <TbCategory className={styles.icon} />
          <span>{category}</span>
        </div>
        <div className={styles.footer}>
          <div className={styles.price}>
            <IoPricetags className={styles.icon} />
            <span>{price} $</span>
          </div>
          <Link to="/products" >
            <FaArrowLeftLong className={styles.icon} />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Details