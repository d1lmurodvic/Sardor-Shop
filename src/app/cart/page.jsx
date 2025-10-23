"use client";

import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      color: "Midnight Black"
    },
    {
      id: 2,
      name: "Smart Watch Series 7",
      price: 449.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      color: "Space Gray"
    },
    {
      id: 3,
      name: "Minimalist Leather Wallet",
      price: 89.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
      color: "Cognac Brown"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-base-content mb-2"> Shopping Cart</h1>
          <p className="text-base-content/70">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-base-100 rounded-2xl p-12 text-center shadow">
                <ShoppingBag className="w-16 h-16 text-neutral mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-base-content mb-2">Your cart is empty</h3>
                <p className="text-base-content/70 mb-6">Add some items to get started</p>
                <button className="btn btn-primary">
                  Continue Shopping
                </button>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="bg-base-100 rounded-2xl p-4 sm:p-6 shadow hover:shadow-lg transition-all">
                  <div className="flex gap-4 sm:gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-xl"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-base-content truncate">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-error hover:opacity-80 transition-all"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-sm text-base-content/70 mb-4">{item.color}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-base-200 rounded-xl p-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="btn btn-xs btn-ghost"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="btn btn-xs btn-ghost"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xl font-bold text-base-content">
                          $ {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-base-100 rounded-2xl p-6 shadow sticky top-8">
              <h2 className="text-xl font-bold text-base-content mb-6">Order Summary</h2>

              <div className="mb-6">
                <label className="text-sm font-medium text-base-content mb-2 block">Promo Code</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/50" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="input input-bordered w-full pl-10"
                    />
                  </div>
                  <button className="btn btn-accent">Apply</button>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-base-300">
                <div className="flex justify-between text-base-content/70">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base-content/70">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-base-content/70">
                  <span>Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold text-base-content">Total</span>
                <span className="text-2xl font-bold text-base-content">${total.toFixed(2)}</span>
              </div>

              {shipping > 0 && (
                <div className="mb-6 p-4 bg-primary/10 rounded-xl">
                  <p className="text-sm text-primary font-medium">
                    Add ${(500 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <button className="btn btn-primary w-full">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Continue Shopping */}
              <button className="btn btn-ghost w-full mt-3">
                Continue Shopping
              </button>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-base-300 text-center">
                <p className="text-xs text-base-content/60">
                  🔒 Secure checkout powered by SSL encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
