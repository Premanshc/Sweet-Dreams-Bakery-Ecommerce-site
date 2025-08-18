'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brown-800 mb-6">
            Our Sweet
            <span className="block text-pink-600">Story</span>
          </h1>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
            For nearly four decades, Sweet Dreams Bakery has been crafting moments of joy, 
            one delicious treat at a time. Our story is baked with love, tradition, and an 
            unwavering commitment to quality.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl font-bold text-brown-800 mb-6">
              From Humble Beginnings
            </h2>
            <div className="space-y-4 text-brown-700 leading-relaxed">
              <p>
                In 1985, Maria and Giuseppe Bellacorte opened the doors to what would become 
                Sweet Dreams Bakery in a small storefront on Baker Street. With nothing but 
                a handful of family recipes passed down through generations and a dream to 
                share their love of baking with the community.
              </p>
              <p>
                What started as a local neighborhood bakery has grown into a beloved institution, 
                but our core values remain the same: using only the finest ingredients, 
                honoring traditional techniques, and treating every customer like family.
              </p>
              <p>
                Today, our son Marco and daughter Sofia continue the family tradition, 
                bringing fresh ideas while preserving the authentic flavors that have 
                made us who we are.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100">
              <div className="text-center">
                <span className="text-6xl mb-4 block">👨‍👩‍👧‍👦</span>
                <h3 className="font-serif text-xl font-semibold text-brown-800 mb-2">
                  The Bellacorte Family
                </h3>
                <p className="text-brown-600">
                  Three generations of baking excellence
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl border border-pink-100 p-8 mb-16"
        >
          <h2 className="font-serif text-3xl font-bold text-brown-800 text-center mb-12">
            What Makes Us Special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Every item is crafted with passion and care, using recipes perfected over generations.'
              },
              {
                icon: Award,
                title: 'Award-Winning Quality',
                description: 'Recognized for excellence in taste, presentation, and customer service.'
              },
              {
                icon: Users,
                title: 'Community Focused',
                description: 'Proudly serving our local community and celebrating life\'s special moments together.'
              },
              {
                icon: Clock,
                title: 'Time-Honored Traditions',
                description: 'Traditional baking methods combined with the finest ingredients for authentic flavors.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brown-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-brown-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
              Ready to Taste the Difference?
            </h2>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Visit our bakery today and experience the love, tradition, and exceptional 
              quality that has made us a community favorite for nearly four decades.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-full hover:bg-pink-50 transition-colors duration-200"
            >
              Visit Our Shop
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
