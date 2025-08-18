'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

interface RelatedProductsProps {
  currentProduct: Product;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProduct }) => {
  // Get related products from the same category, excluding the current product
  const relatedProducts = products
    .filter(product => 
      product.category === currentProduct.category && 
      product.id !== currentProduct.id
    )
    .slice(0, 3);

  // If not enough products in the same category, fill with other products
  if (relatedProducts.length < 3) {
    const otherProducts = products
      .filter(product => 
        product.category !== currentProduct.category && 
        product.id !== currentProduct.id
      )
      .slice(0, 3 - relatedProducts.length);
    
    relatedProducts.push(...otherProducts);
  }

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-white rounded-2xl border border-pink-100 p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl font-bold text-brown-800">
          You Might Also Like
        </h2>
        <a
          href="/shop"
          className="group flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
