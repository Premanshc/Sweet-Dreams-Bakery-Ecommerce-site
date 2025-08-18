'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the cart button
    addToCart(product);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i === Math.floor(rating) && rating % 1 !== 0
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100 hover:shadow-xl transition-all duration-300 ${
        featured ? 'ring-2 ring-pink-200' : ''
      }`}
    >
      <Link href={`/products/${product.id}`}>
        {/* Badge */}
        {featured && (
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors duration-200 group/heart">
          <Heart className="w-4 h-4 text-brown-600 group-hover/heart:text-pink-500 transition-colors duration-200" />
        </button>

        {/* Image */}
        <div className="relative h-64 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to emoji if image doesn't load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="absolute inset-0 flex items-center justify-center"><span class="text-4xl">🧁</span></div>';
              }
            }}
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex space-x-1">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-brown-600">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-semibold text-brown-800 mb-2 group-hover:text-pink-600 transition-colors duration-200">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-brown-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Category */}
          <div className="mb-4">
            <span className="inline-block bg-pink-100 text-pink-700 text-xs font-medium px-2 py-1 rounded-full capitalize">
              {product.category}
            </span>
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold text-brown-800">
                ${product.price.toFixed(2)}
              </span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group/cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover/cart:scale-110 transition-transform duration-200" />
            </motion.button>
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <div className="mt-3 text-center">
              <span className="text-red-500 text-sm font-medium">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};
