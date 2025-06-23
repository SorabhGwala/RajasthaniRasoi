'use client';

import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'Menu', 'Pages', 'Blog', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-[#fe6b35] font-poppins">
              Rajasthani<span className="text-gray-900">Rasoi</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-[#F97316] px-3 py-2 text-sm font-medium font-poppins transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <select className="hidden md:block bg-transparent border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:border-[#F97316] transition-colors">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>

            <Button
              variant="outline"
              size="sm"
              className="relative hover:scale-105 transition-transform duration-300 hover:border-[#F97316] hover:text-[#F97316]"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-2 -right-2 bg-[#F97316] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                3
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-[#F97316] block px-3 py-2 text-base font-medium font-poppins transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
