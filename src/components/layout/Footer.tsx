'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-pink-50 to-purple-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="font-serif text-xl font-semibold text-brown-800">
                Sweet Dreams
              </span>
            </Link>
            <p className="text-brown-600 text-sm leading-relaxed mb-4">
              Crafting sweet memories with every bite. Our artisan bakery has been serving 
              the community with love, passion, and the finest ingredients since 1985.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 group">
                <Instagram className="w-4 h-4 text-brown-600 group-hover:text-pink-600 transition-colors duration-200" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 group">
                <Facebook className="w-4 h-4 text-brown-600 group-hover:text-pink-600 transition-colors duration-200" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 group">
                <Twitter className="w-4 h-4 text-brown-600 group-hover:text-pink-600 transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-brown-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Our Story', href: '/about' },
                { name: 'Menu', href: '/shop' },
                { name: 'Custom Cakes', href: '/custom' },
                { name: 'Catering', href: '/catering' },
                { name: 'Gift Cards', href: '/gift-cards' },
                { name: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-brown-600 hover:text-pink-600 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-brown-800 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-brown-600">
                <MapPin className="w-4 h-4 text-pink-500 flex-shrink-0" />
                <span>123 Baker Street<br />Sweet Valley, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-brown-600">
                <Phone className="w-4 h-4 text-pink-500 flex-shrink-0" />
                <span>(555) 123-CAKE</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-brown-600">
                <Mail className="w-4 h-4 text-pink-500 flex-shrink-0" />
                <span>hello@sweetdreamsbakery.com</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-brown-800 mb-2 text-sm">Store Hours</h4>
              <div className="text-sm text-brown-600 space-y-1">
                <div>Mon-Fri: 7am - 7pm</div>
                <div>Sat-Sun: 8am - 8pm</div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-brown-800 mb-4">Sweet Updates</h3>
            <p className="text-brown-600 text-sm mb-4">
              Subscribe to our newsletter for special offers, new recipes, and bakery news!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-3 py-2 text-sm border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubscribed}
                className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-200 disabled:opacity-50"
              >
                {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pink-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brown-600 text-sm">
              © 2024 Sweet Dreams Bakery. All rights reserved. Made with ❤️ and lots of flour.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-brown-600 hover:text-pink-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-brown-600 hover:text-pink-600 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
