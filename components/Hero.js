"use client";

import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF7ED] to-orange-100 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-[#FFF7ED]0 rounded-full opacity-20 animate-bounce-soft"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-orange-400 rounded-full opacity-30 animate-bounce-soft" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-yellow-400 rounded-full opacity-25 animate-bounce-soft" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
            Delicious food
            <span className="block text-[#fe6b35]">delivered to you</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-poppins">
            Choose from hundreds of restaurants and get your favorite food delivered fast, fresh, and hot to your doorstep.
          </p>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 font-poppins">Category</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFF7ED]0 transition-all duration-300 hover:border-[#FDBA74]">
                  <option>All Categories</option>
<option>Rajasthani       </option>
<option>Dal Baati Churma  </option>
<option>Laal Maas        </option>
<option>Gatte ki Sabzi   </option>
<option>Ker Sangri       </option>
<option>Mawa Kachori     </option>
                </select>
              </div>

              {/* Location Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 font-poppins">Location</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFF7ED]0 transition-all duration-300 hover:border-[#FDBA74]">
                  <option>Select Location</option>
               
                  <option>Jaipur</option>
                  <option>Udaipur</option>
                  <option>Jodhpur</option>
                  <option>Kota</option>
                </select>
              </div>

              {/* Search Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 font-poppins">Search</label>
                <Input 
                  placeholder="Restaurant or dish name..." 
                  className="p-3 h-12 focus:ring-2 focus:ring-[#FFF7ED]0 transition-all duration-300 hover:border-[#FDBA74]"
                />
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-transparent">Search</label>
                <Button className="w-full h-12 bg-[#fe6b35] hover:bg-[#EA580C] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse-glow">
                  <Search className="mr-2 h-4 w-4" />
                  Find Food
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#fe6b35] font-poppins">10K+</div>
              <div className="text-gray-600 font-poppins">Happy Customers</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#fe6b35] font-poppins">500+</div>
              <div className="text-gray-600 font-poppins">Restaurant Partners</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#fe6b35] font-poppins">24/7</div>
              <div className="text-gray-600 font-poppins">Fast Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
