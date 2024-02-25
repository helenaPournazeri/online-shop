import axios from "axios"

function Products() {
  axios.get("https://fakestoreapi.com/products").then(res => console.log(res.data))
  return (
    <>
    <h1>Products</h1>
    </>
  )
}

export default Products