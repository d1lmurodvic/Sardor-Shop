 "use client"

import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [loading, setLoading] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleBuy = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setLoading(true);
    try {
      for (const item of cartItems) {
        await axios.post('https://sardor-s-shop-beckent-5.onrender.com/api/orders/buy', {
          productId: item.id,
          buyerName: "Sardor",
          quantity: item.quantity
        });
      }
      toast.success("Order successfully bought!");
      clearCart();
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center p-12 bg-base-100 rounded-2xl shadow">
              <p>Your cart is empty 🛒</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 bg-base-100 p-4 rounded-2xl shadow">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl"/>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3>{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)}>
                      <Trash2 />
                    </button>
                  </div>
                  <div className="flex items-center mt-2 gap-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="btn btn-xs btn-ghost"><Minus /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="btn btn-xs btn-ghost"><Plus /></button>
                  </div>
                  <p className="mt-2 font-bold">${item.price * item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-base-100 p-6 rounded-2xl shadow sticky top-8 space-y-4">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              className={`btn btn-primary w-full flex justify-center items-center gap-2 ${loading ? "loading" : ""}`}
              onClick={handleBuy}
              disabled={loading}
            >
              {loading ? "Processing..." : "Proceed to Checkout"}
              <ArrowRight className="w-5 h-5"/>
            </button>
            <button className="btn btn-ghost w-full" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}