'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brown-800 mb-6">
            Get in
            <span className="block text-pink-600">Touch</span>
          </h1>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions about our products, 
            want to place a custom order, or just want to say hello, we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl border border-pink-100 p-8">
              <h2 className="font-serif text-2xl font-bold text-brown-800 mb-6">
                Visit Our Bakery
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800 mb-1">Address</h3>
                    <p className="text-brown-600">
                      123 Baker Street<br />
                      Sweet Valley, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800 mb-1">Phone</h3>
                    <p className="text-brown-600">
                      (555) 123-CAKE<br />
                      (555) 123-2253
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800 mb-1">Email</h3>
                    <p className="text-brown-600">
                      hello@sweetdreamsbakery.com<br />
                      orders@sweetdreamsbakery.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800 mb-1">Hours</h3>
                    <div className="text-brown-600 space-y-1">
                      <div>Monday - Friday: 7:00 AM - 7:00 PM</div>
                      <div>Saturday - Sunday: 8:00 AM - 8:00 PM</div>
                      <div className="text-sm text-pink-600 mt-2">
                        Extended hours during holidays
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl border border-pink-100 p-8">
              <h3 className="font-serif text-xl font-semibold text-brown-800 mb-4">
                Find Us
              </h3>
              <div className="h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-2" />
                  <p className="text-brown-600">Interactive Map</p>
                  <p className="text-sm text-brown-500">123 Baker Street, Sweet Valley</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl border border-pink-100 p-8"
          >
            <h2 className="font-serif text-2xl font-bold text-brown-800 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="custom-order">Custom Order</option>
                  <option value="catering">Catering Services</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>

            <div className="mt-6 p-4 bg-pink-50 rounded-xl">
              <p className="text-sm text-brown-600">
                <strong>For custom orders:</strong> Please allow 48-72 hours advance notice. 
                For large events or wedding cakes, we recommend placing your order at least 
                2 weeks in advance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
