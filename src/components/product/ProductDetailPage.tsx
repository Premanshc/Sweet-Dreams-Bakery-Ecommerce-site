'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { products, reviews } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ReviewSection } from '@/components/product/ReviewSection';
import { RelatedProducts } from '@/components/product/RelatedProducts';

interface ProductDetailPageProps {
  productId: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();

  const product = products.find(p => p.id === productId);
  const productReviews = reviews.filter(r => r.productId === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍰</div>
          <h2 className="font-serif text-2xl font-semibold text-brown-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-brown-600">
            Sorry, we couldn&apos;t find the product you&apos;re looking for.
          </p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i === Math.floor(rating) && rating % 1 !== 0
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'allergens', label: 'Allergens' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
  <ol className="flex items-center space-x-2 text-sm text-brown-600">
    <li>
      <Link href="/" className="hover:text-pink-600 transition-colors">
        Home
      </Link>
    </li>
    <li><span>/</span></li>
    <li>
      <Link href="/shop" className="hover:text-pink-600 transition-colors">
        Shop
      </Link>
    </li>
    <li><span>/</span></li>
    <li className="text-brown-800 capitalize">{product.category}</li>
    <li><span>/</span></li>
    <li className="text-brown-800 font-medium">{product.name}</li>
  </ol>
</nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-white rounded-2xl border border-pink-100 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <span className="text-8xl">🧁</span>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded-lg border border-pink-100 flex items-center justify-center cursor-pointer hover:border-pink-300 transition-colors"
                >
                  <span className="text-2xl">🧁</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Category Badge */}
            <div>
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full capitalize">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brown-800">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-brown-600 font-medium">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="font-serif text-4xl font-bold text-brown-800">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-brown-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="font-medium text-brown-800">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-brown-600" />
                </button>
                <span className="w-12 text-center font-medium text-brown-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors"
                >
                  <Plus className="w-4 h-4 text-brown-600" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </motion.button>
              
              <button className="p-4 border-2 border-pink-200 rounded-full hover:border-pink-300 hover:bg-pink-50 transition-colors group">
                <Heart className="w-6 h-6 text-brown-600 group-hover:text-pink-600 transition-colors" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-pink-100">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-pink-500" />
                <span className="text-sm text-brown-600">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-pink-500" />
                <span className="text-sm text-brown-600">Same Day Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-pink-500" />
                <span className="text-sm text-brown-600">Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl border border-pink-100 p-8 mb-16"
        >
          {/* Tab Navigation */}
          <div className="border-b border-pink-100 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-brown-600 hover:text-pink-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-32">
            {activeTab === 'description' && (
              <div className="prose prose-brown max-w-none">
                <p className="text-brown-700 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-brown-600 mt-4">
                  Made fresh daily in our artisan bakery using traditional methods and the finest ingredients. 
                  Each {product.name.toLowerCase()} is carefully crafted to ensure the perfect balance of flavor, 
                  texture, and visual appeal. Perfect for any special occasion or as a delightful everyday treat.
                </p>
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div>
                <h3 className="font-semibold text-brown-800 mb-4">Ingredients:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'allergens' && (
              <div>
                <h3 className="font-semibold text-brown-800 mb-4">Contains:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.allergens.map((allergen, index) => (
                    <span
                      key={index}
                      className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
                <p className="text-brown-600 text-sm mt-4">
                  Please inform us of any allergies when placing your order. 
                  Our products are made in a facility that also processes nuts, dairy, and gluten.
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Reviews Section */}
        <ReviewSection product={product} reviews={productReviews} />

        {/* Related Products */}
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
};
