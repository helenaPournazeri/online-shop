import { Link } from "react-router-dom"
import { LuShoppingCart } from "react-icons/lu";
import styles from "./layout.module.css"
import { useCart } from "../context/CartContext";


function Layout({children}) {

    const [state,] = useCart()
  return (
    <>
        <header className={styles.header}>
            <Link to="/products" >BotoShop</Link>
            <Link  to="/checkout" > 
            <div>
            <LuShoppingCart /> 
            {!!state.totalQuantity && <span>{state.totalQuantity}</span>}
            </div>
            </Link>
        
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by helena</p>
        </footer>
    </>
  )
}

export default Layout