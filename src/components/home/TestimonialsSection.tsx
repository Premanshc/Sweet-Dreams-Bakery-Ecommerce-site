'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      content: 'Sweet Dreams Bakery has been my go-to for every special occasion. Their vanilla cake is absolutely divine, and the customer service is exceptional!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Wedding Client',
      content: 'They created the most beautiful wedding cake for us. Not only did it look stunning, but it tasted even better. Our guests are still talking about it!',
      rating: 5,
      image: '👨‍💻',
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Birthday Mom',
      content: 'As a busy mom, I appreciate their quality and reliability. My daughter\'s birthday cake was perfect, and the whole family loved every bite.',
      rating: 5,
      image: '👩‍👧',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

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
            <Quote className="w-4 h-4" />
            <span>What Our Customers Say</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-800 mb-4">
            Sweet Stories From
            <span className="block text-pink-600">Happy Hearts</span>
          </h2>
          
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Every review tells a story of joy, celebration, and the perfect sweet moment. 
            Here's what our customers have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-pink-400 opacity-60" />
                </div>

                {/* Content */}
                <p className="text-brown-700 mb-6 leading-relaxed flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-2xl">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-brown-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Ready to Create Your Own Sweet Story?
            </h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made their celebrations 
              extra special with our handcrafted treats.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-full hover:bg-pink-50 transition-colors duration-200"
            >
              Order Your Favorites
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
