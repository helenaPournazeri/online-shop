import { RotatingLines } from "react-loader-spinner";

import styles from "../components/loader.module.css"

function Loader() {
  return (
    <div className={styles.loader}>
        <RotatingLines 
        height="96"
        width="96"
        strokeWidth="5"
        strokeColor="#fe5d42"
        />
    </div>
  )
}

export default Loader