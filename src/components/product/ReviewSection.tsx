'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, MessageCircle, Filter } from 'lucide-react';
import { Product, Review } from '@/types';

interface ReviewSectionProps {
  product: Product;
  reviews: Review[];
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ product, reviews }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'rating-high' | 'rating-low'>('newest');

  const renderStars = (rating: number, size: 'sm' | 'md' = 'sm') => {
    const starSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${starSize} ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getRatingBreakdown = () => {
    const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review => {
      breakdown[review.rating as keyof typeof breakdown]++;
    });
    return breakdown;
  };

  const filteredAndSortedReviews = () => {
    let filtered = reviews;
    
    if (filterRating) {
      filtered = reviews.filter(review => review.rating === filterRating);
    }

    switch (sortBy) {
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'rating-high':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating-low':
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      default: // newest
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
    }

    return filtered;
  };

  const ratingBreakdown = getRatingBreakdown();
  const processedReviews = filteredAndSortedReviews();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="bg-white rounded-2xl border border-pink-100 p-8 mb-16"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl font-bold text-brown-800">
          Customer Reviews
        </h2>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium py-2 px-6 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
        >
          Write a Review
        </button>
      </div>

      {/* Overall Rating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-pink-100">
        {/* Rating Summary */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="font-serif text-4xl font-bold text-brown-800">
              {product.rating}
            </span>
            <div className="flex space-x-1">
              {renderStars(product.rating, 'md')}
            </div>
          </div>
          <p className="text-brown-600">
            Based on {product.reviewCount} reviews
          </p>
        </div>

        {/* Rating Breakdown */}
        <div className="space-y-2">
          {Object.entries(ratingBreakdown)
            .reverse()
            .map(([rating, count]) => (
              <div key={rating} className="flex items-center space-x-3">
                <span className="text-sm text-brown-600 w-8">
                  {rating} ★
                </span>
                <div className="flex-1 bg-pink-100 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${reviews.length > 0 ? (count / reviews.length) * 100 : 0}%`,
                    }}
                  />
                </div>
                <span className="text-sm text-brown-600 w-8">
                  {count}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-pink-50 rounded-xl p-6 mb-8"
        >
          <h3 className="font-semibold text-brown-800 mb-4">Write Your Review</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brown-700 mb-2">
                Your Rating
              </label>
              <div className="flex space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    className="p-1"
                  >
                    <Star className="w-6 h-6 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brown-700 mb-2">
                Your Review
              </label>
              <textarea
                rows={4}
                placeholder="Share your experience with this product..."
                className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brown-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium py-2 px-6 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="bg-gray-200 text-brown-700 font-medium py-2 px-6 rounded-full hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center space-x-4">
          <Filter className="w-4 h-4 text-brown-600" />
          <select
            value={filterRating || ''}
            onChange={(e) => setFilterRating(e.target.value ? parseInt(e.target.value) : null)}
            className="text-sm border border-pink-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
        
   <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="text-sm border border-pink-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="rating-high">Highest Rated</option>
          <option value="rating-low">Lowest Rated</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {processedReviews.length > 0 ? (
          processedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-pink-100 pb-6 last:border-b-0"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                    {review.customerName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-brown-800">
                        {review.customerName}
                      </h4>
                      {review.verified && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          ✓ Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-brown-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-brown-700 leading-relaxed mb-3">
                {review.comment}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-brown-500">
                <button className="flex items-center space-x-1 hover:text-pink-600 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful (2)</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-pink-600 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>Reply</span>
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-8">
            <MessageCircle className="w-12 h-12 text-brown-400 mx-auto mb-3" />
            <p className="text-brown-600">
              {filterRating ? 'No reviews match your filter.' : 'No reviews yet. Be the first to review!'}
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
};
