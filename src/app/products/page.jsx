"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const handleBuy = (product) => {
    const token = getToken();

    if (!token) {
      toast.error("Please login to buy products");
      return;
    }

    addToCart(product);
    toast.success("Product added to cart");
  };

  const handleLike = async (productId) => {
    const token = getToken();

    if (!token) {
      toast.error("Please login to like products");
      return;
    }

    try {
      const res = await axios.post(
        `https://sardor-s-shop-beckent-5.onrender.com/api/products/like/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProducts((prev) =>
        prev.map((p) =>
          p._id === productId
            ? {
                ...p,
                liked: res.data.liked,
                likes: res.data.likes,
              }
            : p
        )
      );
    } catch (err) {
      toast.error("Failed to like product");
    }
  };

  // 📦 FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://sardor-s-shop-beckent-5.onrender.com/api/products/all"
      );

      // default like fields
      const prepared = res.data.map((p) => ({
        ...p,
        liked: false,
        likes: p.likes || 0,
      }));

      setProducts(prepared);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ⏳ LOADING
  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg text-info"></span>
      </div>
    );
  }

  // ❌ ERROR
  if (error) {
    return (
      <div className="p-6 text-center">
        <p>{error}</p>
        <button onClick={fetchProducts} className="btn btn-primary mt-4">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-base-200">
      <h1 className="text-4xl font-bold mb-6">Discover Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-xl rounded-2xl border-2 border-info"
          >
            <figure className="relative overflow-hidden aspect-square">
              <img
                src={product.image || "https://via.placeholder.com/400"}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform"
              />

              {/* ❤️ LIKE BUTTON */}
              <button
                onClick={() => handleLike(product._id)}
                className="absolute top-3 right-3 bg-base-100 p-2 rounded-full shadow"
              >
                <Heart
                  className={`w-6 h-6 ${
                    product.liked
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400"
                  }`}
                />
              </button>
            </figure>

            <div className="card-body border-t-2 border-info rounded-2xl">
              <h2 className="card-title">{product.title}</h2>

              <p className="text-sm text-base-content/70 line-clamp-2">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-error">
                  ❤️ {product.likes}
                </span>
                <span className="text-xl font-bold text-success">
                  ${product.price}
                </span>
              </div>

              <button
                onClick={() => handleBuy(product)}
                className="btn btn-primary rounded-2xl mt-3"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
