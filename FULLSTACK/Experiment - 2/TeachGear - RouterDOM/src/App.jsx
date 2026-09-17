import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductCatalog from "./ProductCatalog";
import ProductDetails from "./ProductDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/products"
          element={<ProductCatalog />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetails />}
        />
      </Routes>
    </>
  );
}
export default App;
