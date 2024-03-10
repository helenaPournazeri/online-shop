/* eslint-disable react/prop-types */
import { updateQuery } from "../helpers/helper"
import { ImSearch } from "react-icons/im";
import styles from "./searchBox.module.css"


function SearchBox({search, setQuery, setSearch}) {

    const searchHandler = ()=> {
        setQuery(query=>(updateQuery(query, {search})))
      }

  return (
    <div className={styles.search}>
        <input type="text" placeholder="Search" value={search} onChange={(e) =>{setSearch(e.target.value.toLowerCase().trim())}} />
        <button onClick={searchHandler} > <ImSearch className={styles.icon} /> </button>
    </div>
  )
}

export default SearchBox