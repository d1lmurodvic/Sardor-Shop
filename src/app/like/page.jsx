"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Like() {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const fetchLiked = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://sardor-s-shop-beckent-5.onrender.com/api/products/liked",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLikedProducts(res.data);
    };

    fetchLiked();
  }, []);

  if (likedProducts.length === 0) {
    return <p className="p-6 text-center items-center justify-center flex h-screen">No liked products yet ❤️</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {likedProducts.map((product) => (
        <div key={product._id} className="card bg-base-100 shadow">
          <img src={product.image} className="h-48 object-cover" />
          <div className="card-body">
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
    