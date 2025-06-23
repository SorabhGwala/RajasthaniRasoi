"use client";

import React from 'react';
import { Home, Search } from 'lucide-react';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-[#F97316] font-poppins">
              Quick<span className="text-white">Eat</span>
            </div>
            <p className="text-gray-300 font-poppins leading-relaxed">
              Delivering delicious food from your favorite restaurants to your doorstep. Fast, fresh, and reliable.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span className="font-poppins">123 Food Street, Flavor City, FC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span className="font-poppins">(555) 123-FOOD</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span className="font-poppins">hello@quickeat.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Menu', 'Restaurants', 'How it Works', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#F97316] transition-colors duration-300 font-poppins relative group"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Categories</h3>
            <ul className="space-y-2">
              {['Pizza', 'Burgers', 'Sushi', 'Chinese', 'Italian', 'Mexican', 'Indian', 'Thai'].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#F97316] transition-colors duration-300 font-poppins relative group"
                  >
                    {category}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Stay Connected</h3>
            <p className="text-gray-300 font-poppins">
              Follow us for the latest updates and mouth-watering deals!
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: 'facebook', color: 'hover:text-blue-500' },
                { name: 'Twitter', icon: 'twitter', color: 'hover:text-blue-400' },
                { name: 'Instagram', icon: 'instagram', color: 'hover:text-pink-500' },
                { name: 'LinkedIn', icon: 'linkedin', color: 'hover:text-blue-600' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <span className="text-lg">
                    {social.icon === 'facebook' && '📘'}
                    {social.icon === 'twitter' && '🐦'}
                    {social.icon === 'instagram' && '📷'}
                    {social.icon === 'linkedin' && '💼'}
                  </span>
                </a>
              ))}
            </div>

            {/* App Download Links */}
            <div className="space-y-2">
              <button className="w-full bg-black text-white px-4 py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 font-poppins">
                📱 Download on App Store
              </button>
              <button className="w-full bg-black text-white px-4 py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 font-poppins">
                🤖 Get it on Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm font-poppins">
              © {currentYear} QuickEat. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-300 hover:text-[#F97316] transition-colors duration-300 font-poppins"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
