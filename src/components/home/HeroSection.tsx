'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Floating elements */} 
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-50"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-purple-300 rounded-full opacity-40"
        />
        
        {/* Sparkle effects */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-32 right-1/3"
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-1/3 left-1/4"
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-brown-700 border border-pink-200 mb-8"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Handcrafted with Love Since 1985</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brown-800 mb-6"
          >
            Sweet Dreams
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Come True
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-brown-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Discover artisan cakes, pastries, and treats made with the finest ingredients. 
            Every bite tells a story of passion, tradition, and pure deliciousness.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Our Treats</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm text-brown-700 font-semibold py-4 px-8 rounded-full border-2 border-pink-200 hover:border-pink-300 hover:bg-white transition-all duration-300"
              >
                Our Story
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Delicious Varieties' },
              { number: '10K+', label: 'Happy Customers' },
              { number: '39', label: 'Years of Excellence' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl font-bold text-brown-800 mb-1">
                  {stat.number}
                </div>
                <div className="text-brown-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
