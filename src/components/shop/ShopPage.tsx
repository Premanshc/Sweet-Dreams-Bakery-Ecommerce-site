'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Product } from '@/types';

export const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
 
  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'cakes', label: 'Cakes' },
    { value: 'pastries', label: 'Pastries' },
    { value: 'bread', label: 'Bread' },
    { value: 'cookies', label: 'Cookies' },
    { value: 'seasonal', label: 'Seasonal' },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Our Sweet
              <span className="block text-pink-600">Collection</span>
            </h1>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              Discover our full range of handcrafted treats, from classic favorites 
              to seasonal specialties. Every item is made with love and the finest ingredients.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-white rounded-2xl border border-pink-100 p-6 sticky top-24">
              <h3 className="font-serif text-xl font-semibold text-brown-800 mb-6">
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-brown-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-brown-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for treats..."
                    className="w-full pl-10 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-brown-700 mb-3">
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.value} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-pink-500 focus:ring-pink-400 border-pink-300"
                      />
                      <span className="ml-2 text-sm text-brown-700">
                        {category.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-brown-700 mb-3">
                  Price Range
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-pink-500"
                  />
                  <div className="flex justify-between text-sm text-brown-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white text-brown-700 px-4 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors duration-200"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-brown-600">
                Showing {filteredAndSortedProducts.length} of {products.length} products
              </p>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredAndSortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredAndSortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-serif text-2xl font-semibold text-brown-800 mb-2">
                  No products found
                </h3>
                <p className="text-brown-600 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 100]);
                  }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium py-2 px-6 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
