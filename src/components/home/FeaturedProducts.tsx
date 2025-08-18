'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

export const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-pink-50 rounded-full px-4 py-2 text-sm font-medium text-pink-700 mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Customer Favorites</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-800 mb-4">
            Our Featured
            <span className="block text-pink-600">Delicacies</span>
          </h2>
          
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Handpicked selections that have won hearts and taste buds. 
            Each creation is a masterpiece of flavor and artistry.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} featured />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
