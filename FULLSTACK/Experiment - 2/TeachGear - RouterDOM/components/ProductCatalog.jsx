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
      !maxPrice || product.price <= Number(maxPrice);

    return categoryMatch && priceMatch;
  });

  function handleCategoryChange(e) {
    const value = e.target.value;

    if (value === "") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", value);
    }
    setSearchParams(searchParams);
  }

  function handlePriceChange(e) {
    const value = e.target.value;

    if (value === "") {
      searchParams.delete("maxPrice");
    } else {
      searchParams.set("maxPrice", value);
    }

    setSearchParams(searchParams);
  }

  function clearFilters() {
    setSearchParams({});
  }

  return (
    <div>
      <h1>TechGear Products</h1>
      <select
        value={category || ""}
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        <option value="audio">Audio</option>
        <option value="peripherals">Peripherals</option>
        <option value="display">Display</option>
      </select>
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice || ""}
        onChange={handlePriceChange}
      />
      <button onClick={clearFilters}>
        Clear Filters
      </button>
      <hr />
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>

          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalog;
