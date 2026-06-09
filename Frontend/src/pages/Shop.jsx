import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/product.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchProducts = async (category = "") => {
    try {
      setLoading(true);

      const url = category
        ? `/api/products?category=${category}`
        : "/api/products";

      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="shop-container">
      <h2>All Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="category-buttons">
        <button
          className={selectedCategory === "" ? "active-category" : ""}
          onClick={() => {
            setSelectedCategory("");
            fetchProducts();
          }}
        >
          All
        </button>

        <button
          className={
            selectedCategory === "Electronics" ? "active-category" : ""
          }
          onClick={() => {
            setSelectedCategory("Electronics");
            fetchProducts("Electronics");
          }}
        >
          Electronics
        </button>

        <button
          className={selectedCategory === "Fashion" ? "active-category" : ""}
          onClick={() => {
            setSelectedCategory("Fashion");
            fetchProducts("Fashion");
          }}
        >
          Fashion
        </button>

        <button
          className={selectedCategory === "Shoes" ? "active-category" : ""}
          onClick={() => {
            setSelectedCategory("Shoes");
            fetchProducts("Shoes");
          }}
        >
          Shoes
        </button>

        <button
          className={selectedCategory === "Beauty" ? "active-category" : ""}
          onClick={() => {
            setSelectedCategory("Beauty");
            fetchProducts("Beauty");
          }}
        >
          Beauty
        </button>

        <button
          className={selectedCategory === "Books" ? "active-category" : ""}
          onClick={() => {
            setSelectedCategory("Books");
            fetchProducts("Books");
          }}
        >
          Books
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
