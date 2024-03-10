import { Routes, Route, Navigate} from "react-router-dom"
import Products from "./pages/Products"
import Details from "./pages/Details"
import Checkout from "./pages/Checkout"
import PageNotFound from "./pages/PageNotFound"
import ProductProvider from "./context/ProductContext"
import CartProvider from "./context/CartContext"
import Layout from "./layouts/Layout"
function App() {

  return (
    <CartProvider>
    <ProductProvider>
      <Layout>
      <Routes>
        <Route index element={<Navigate to="/Products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </Layout>
    </ProductProvider>
    </CartProvider>
  )
}

export default App
