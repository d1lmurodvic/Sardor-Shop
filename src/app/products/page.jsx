"use client"

import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://sardor-s-shop-beckent-4.onrender.com/api/products/all');
      console.log(response.data);
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
    return (
      <div className="min-h-screen bg-base-200 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton h-80 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-bold mb-2">Oops!</h2>
          <p className="text-base-content/70 mb-6">{error}</p>
          <button
            onClick={fetchProducts}
            className="btn btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Discover Products
          </h1>
          <p className="text-base-content/70">
            {products.length} items available
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <figure className="relative overflow-hidden bg-base-300 aspect-square">
                <img
                  src={product.image || "https://via.placeholder.com/400"}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title line-clamp-2 min-h-[3.5rem]">
                  {product.title}
                </h2>

                {product.description && (
                  <p className="text-sm text-base-content/70 line-clamp-2">
                    {product.description}
                  </p>
                )}

                {product.rating && (
                  <div className="flex items-center gap-2">
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name={`rating-${product._id}`}
                          className="mask mask-star-2 bg-warning"
                          checked={i < Math.floor(product.rating)}
                          readOnly
                        />
                      ))}
                    </div>
                    <span className="text-sm text-base-content/60">
                      ({product.rating})
                    </span>
                  </div>
                )}

                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-success">
                      ${product.price}
                    </span>
                  </div>
                  <button className="btn btn-primary rounded-2xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛍️</div>
            <h2 className="text-2xl font-bold mb-2">
              No Products Found
            </h2>
            <p className="text-base-content/70">
              Check back later for new items
            </p>
          </div>
        )}
      </div>
    </div>
  );
}