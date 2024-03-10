import { useCart } from "../context/CartContext"
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./checkout.module.css"
import { FaRegTrashCan } from "react-icons/fa6";


function Checkout() {

  const [state, dispatch] = useCart()
  console.log(state)
  const {selectedItems, totalQuantity, totalPrice, checkout} = state;
  console.log(totalPrice)

  const clickHandler = (type, payload)=> dispatch({type, payload})

  return (
    
      <div className={styles.container}>
        <div className={styles.cart}>
          <div>
          <TbChecklist />
          <span>Total:</span>
          <span>{totalPrice}</span>
          </div>

          <div>
          <FaHashtag />
          <span>Quantity:</span>
          <span>{totalQuantity}</span>
          </div>

          <div>
          <BsPatchCheck />
          <span>Status:</span>
          <span>{!checkout && "Pending..."}</span>
          </div>

          <p>Checkout</p>
        </div>
        <div className={styles.products}>
          {selectedItems.map(item => 
            <div className={styles.item} key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <span>{item.title} -</span>
                <span className={styles.price}>{item.price} $</span>
              </div>
              <div className={styles.quantity}>
                {item.quantity === 1 && <button onClick={()=>clickHandler("REMOVE_ITEM", item)} > <FaRegTrashCan /> </button>}
                {item.quantity > 1 && <button onClick={()=>clickHandler("DECREASE", item)} >-</button>}
                <span>{item.quantity}</span>
                <button onClick={()=>clickHandler("INCREASE", item)} >+</button>
              </div>
            </div>
            )}
        </div>
      </div>
  )
}

export default Checkout