'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for excellence in artisan baking and customer service.',
    },
    {
      icon: Users,
      title: 'Family Owned',
      description: 'Three generations of baking expertise passed down through our family.',
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Everything is baked fresh daily using traditional methods and premium ingredients.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every creation is crafted with passion, care, and attention to detail.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 text-sm font-medium text-pink-700 mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span>Our Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-800 mb-6">
              Baking Dreams Into
              <span className="block text-pink-600">Reality Since 1985</span>
            </h2>

            <p className="text-lg text-brown-600 mb-8 leading-relaxed">
              What started as a small neighborhood bakery has grown into a beloved 
              institution. Our commitment to using only the finest ingredients, 
              time-honored techniques, and innovative flavors has made us the 
              go-to destination for life&apos;s sweetest moments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <feature.icon className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-brown-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative h-96 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">👩‍🍳</span>
                  <p className="text-brown-600 font-medium">Master Baker at Work</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-pink-100"
            >
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-brown-800">39</div>
                <div className="text-sm text-brown-600">Years</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-pink-100"
            >
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-brown-800">50+</div>
                <div className="text-sm text-brown-600">Recipes</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-1/2 -right-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-lg p-4"
            >
              <div className="text-center">
                <div className="font-serif text-xl font-bold">10K+</div>
                <div className="text-xs opacity-90">Happy Customers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
