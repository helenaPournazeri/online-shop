/* eslint-disable react/prop-types */
import { FaList } from "react-icons/fa6";
import { updateQuery } from "../helpers/helper";
import styles from "./sidebar.module.css"
import { useEffect } from "react";
import { categories } from "../constant/list";


function Sidebar({setQuery, query}) {

    const categoryHandler = (e)=> {
        const { tagName} = e.target;
        if(tagName !== "LI") return;
        const category = e.target.innerText.toLowerCase();
        setQuery(query=>(updateQuery(query, {category})))
    
    }

    useEffect(()=>{

    },[query])

  return (
    <div className={styles.sidebar}>
        <div className={styles.title}>
        <FaList className={styles.icon} />
        <p>Category</p>
        </div>
        <ul onClick={categoryHandler}>
          {categories.map(item => 
            <li className={item.type.toLowerCase() === query.category ? styles.selected : null} key={item.id}>{item.type}</li>
            )}
        </ul>

      </div>
  )
}

export default Sidebar