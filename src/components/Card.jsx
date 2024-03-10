/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import { productQuantity, shortenText } from "../helpers/helper";
import { useCart } from "../context/CartContext";

import styles from "../components/card.module.css"
import { useState } from "react";

function Card({product}) {
    const {title, image, price, id} = product;
    const [state, dispatch] = useCart();
    // console.log(state)

    const clickHandler = (type) => {
      dispatch({type: type, payload: product})
    }

    const quantity = productQuantity(state, id);
    
  return (
    <div className={styles.card}>
        <img src={image} alt="" />
        <h3>{shortenText(title)}</h3>
        <p>{price}</p>
        <div className={styles.buttons}>
            <Link to={`/products/${id}`} > <TbListDetails /> </Link>
            <div className={styles.quantity}>
              {quantity === 1 && 
              <button onClick={()=> {clickHandler("REMOVE_ITEM")}} > <FaRegTrashCan />
               </button>}
              
              {quantity > 1 && 
              <button onClick={()=> {clickHandler("DECREASE")}} >-</button>}

              {!!quantity && <span>{quantity}</span>}

              {quantity === 0 ?
              <button onClick={()=> {clickHandler("ADD_ITEM")}}> <TbShoppingBagCheck /> 
              </button> : <button onClick={()=> {clickHandler("INCREASE")}} >+</button> }
            
            
            
            
            </div>
        </div>
    </div>
  )
}

export default Card