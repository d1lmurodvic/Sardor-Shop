// pages/products.js
"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://sardor-s-shop-beckent-5.onrender.com/api/products/all');
      setProducts(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="p-6 flex items-center justify-center h-screen">
      <span className="loading loading-bars text-info loading-lg"></span>
    </div>;
  }

  if (error) {
    return (
      <div className="p-6 text-center">
        <p>{error}</p>
        <button onClick={fetchProducts} className="btn btn-primary mt-4">Retry</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-base-200">
      <h1 className="text-4xl font-bold mb-6">Discover Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product._id} className="card bg-base-100 shadow-xl rounded-2xl hover:shadow-2xl border-2 border-info transition-all">
            <figure className="overflow-hidden aspect-square">
              <img
                src={product.image || "https://via.placeholder.com/400"}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform"
              />
            </figure>
            <div className="card-body border-t-2 border-info rounded-2xl">
              <h2 className="card-title">{product.title}</h2>
              <p className="text-sm text-base-content/70 line-clamp-2">{product.description}</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-xl font-bold text-success">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-primary rounded-2xl"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
