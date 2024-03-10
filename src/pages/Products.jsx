import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext"
import { filterProduct, getInitialQuery, searchProduct} from "../helpers/helper";
import styles from "../pages/products.module.css"
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";


function Products() {
  const [search, setSearch] = useState("")
  const [list, setList] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams()
  const products = useProducts();



  useEffect(()=>{
    setList(products)
    setQuery(getInitialQuery(searchParams))
    
  },[products] )
  
  useEffect(()=>{
    setSearchParams(query)
    setSearch(query.search || "")
    let finalProducts= searchProduct(products, query.search);
    finalProducts = filterProduct(finalProducts, query.category)
    setList(finalProducts)

  },[query])
  
  return (
    <>
    <SearchBox setQuery={setQuery} search={search} setSearch={setSearch} />
    <div className={styles.container}>

      <div className={styles.products}>
        {!list.length && <Loader />}
        {list.map(product => <Card key={product.id} product={product} />)}
      </div>
      <Sidebar setQuery={setQuery} query={query} />

    </div>
    </>
  )
}

export default Products