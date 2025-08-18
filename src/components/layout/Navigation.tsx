'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = getItemCount();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <span className="font-serif text-xl lg:text-2xl font-semibold text-brown-800">
              Sweet Dreams
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brown-700 hover:text-pink-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link href="/cart" className="relative p-2 hover:bg-pink-50 rounded-full transition-colors duration-200">
              <ShoppingBag className="w-6 h-6 text-brown-700" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-pink-50 rounded-full transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-brown-700" />
              ) : (
                <Menu className="w-6 h-6 text-brown-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-pink-100"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-brown-700 hover:text-pink-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
