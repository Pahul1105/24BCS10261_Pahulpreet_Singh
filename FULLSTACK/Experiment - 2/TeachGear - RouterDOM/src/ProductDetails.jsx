import { Link, useParams } from "react-router-dom";
import PRODUCTS from "./productsData";
function ProductDetails() {
  const { productId } = useParams();
  const product = PRODUCTS.find(
    (p) => p.id === Number(productId)
  );
  if (!product) {
    return <h2>Product not found!</h2>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>ID: {product.id}</p>
      <Link to="/products">
        <button>Back to Products</button>
      </Link>
    </div>
  );
}
export default ProductDetails;
