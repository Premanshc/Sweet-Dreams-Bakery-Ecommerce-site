'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Minus, Plus, X, ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-12 h-12 text-pink-400" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-brown-800 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-brown-600 mb-8">
            Looks like you haven&apos;t added any sweet treats to your cart yet. 
            Let&apos;s change that!
          </p>
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Start Shopping</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brown-800 mb-4">
            Your Shopping
            <span className="block text-pink-600">Cart</span>
          </h1>
          <p className="text-brown-600">
            Review your selections and proceed to checkout when ready
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl border border-pink-100 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl font-semibold text-brown-800">
                  Cart Items ({cart.itemCount})
                </h2>
                {cart.items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-sm text-brown-500 hover:text-red-600 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {cart.items.map((item, index) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 border border-pink-100 rounded-xl hover:shadow-sm transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🧁</span>
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow">
                      <h3 className="font-serif text-lg font-semibold text-brown-800 mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-brown-600 text-sm mb-2 line-clamp-2">
                        {item.product.description}
                      </p>
                      <div className="text-brown-800 font-semibold">
                        ${item.product.price.toFixed(2)} each
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors"
                      >
                        <Minus className="w-4 h-4 text-brown-600" />
                      </button>
                      <span className="w-8 text-center font-medium text-brown-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-brown-600" />
                      </button>
                    </div>

                    {/* Item Total & Remove */}
                    <div className="flex flex-col items-end space-y-2">
                      <div className="font-serif text-lg font-bold text-brown-800">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1 text-brown-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Continue Shopping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Link href="/shop">
                <button className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-colors">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span>Continue Shopping</span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl border border-pink-100 p-6 sticky top-24"
            >
              <h2 className="font-serif text-xl font-semibold text-brown-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-brown-700">
                  <span>Subtotal ({cart.itemCount} items)</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-brown-700">
                  <span>Delivery Fee</span>
                  <span>$5.99</span>
                </div>
                <div className="flex justify-between text-brown-700">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <hr className="border-pink-100" />
                <div className="flex justify-between font-serif text-lg font-bold text-brown-800">
                  <span>Total</span>
                  <span>${(getCartTotal() + 5.99 + getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
              >
                Proceed to Checkout
              </motion.button>

              {/* Payment Methods */}
              <div className="text-center">
                <p className="text-sm text-brown-600 mb-3">We accept</p>
                <div className="flex justify-center space-x-2">
                  {['💳', '🏦', '📱', '💰'].map((icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-8 bg-pink-50 rounded border border-pink-200 flex items-center justify-center text-sm"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Offers */}
              <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-pink-600">🎉</span>
                  <span className="font-medium text-brown-800 text-sm">Special Offer</span>
                </div>
                <p className="text-brown-600 text-xs">
                  Free delivery on orders over $50! Add ${Math.max(0, 50 - getCartTotal()).toFixed(2)} more to qualify.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
