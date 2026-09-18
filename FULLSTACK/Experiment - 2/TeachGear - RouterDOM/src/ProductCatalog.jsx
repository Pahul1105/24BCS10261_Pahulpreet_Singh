import { Link, useSearchParams } from "react-router-dom";
import PRODUCTS from "./productsData";
function ProductCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const maxPrice = searchParams.get("maxPrice");
  const filteredProducts = PRODUCTS.filter((product) => {
    const categoryMatch =
      !category || product.category === category;
    const priceMatch =
      !maxPrice || product.price <= Number( );

    return categoryMatch && priceMatch;
  });                                                                                                                                                      
  function handleCategory(e) {
    const value = e.target.value;
    if (value === "") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", value);
    }
    setSearchParams(searchParams);
  }
  function handlePrice(e) {
    const value = e.target.value;
    if (value === "") {
      searchParams.delete("maxPrice");
    } else {
      searchParams.set("maxPrice", value);
    }
    setSearchParams(searchParams);
  }
  return (
    <div>

      <h1>Products</h1>

      <select
        value={category || ""}
        onChange={handleCategory}
      >
        <option value="">All</option>
        <option value="audio">Audio</option>
        <option value="peripherals">Peripherals</option>
        <option value="display">Display</option>
      </select>   
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice || ""}
        onChange={handlePrice}
      />
      <button onClick={() => setSearchParams({})}>
        Clear Filters
      </button>
      {filteredProducts.map((product) => (
        <div key={product.id}>

          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>

          <p>${product.price}</p>

        </div>
      ))}

    </div>
  );
}

export default ProductCatalog;
