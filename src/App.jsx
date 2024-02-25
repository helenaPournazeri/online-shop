import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import Products from "./pages/Products"
import Details from "./pages/Details"
import Checkout from "./pages/Checkout"
import PageNotFound from "./pages/PageNotFound"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/Products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
