"use client";

import React from 'react';

const AppDownload = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#fe6b35] to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce-soft"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-bounce-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-bounce-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins leading-tight">
              Get the QuickEat App
            </h2>
            <p className="text-xl mb-8 opacity-90 font-poppins leading-relaxed">
              Download our mobile app for an even better experience. Order faster, track your delivery in real-time, and enjoy exclusive app-only deals.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#fe6b35] text-sm">✓</span>
                </div>
                <span className="font-poppins">Real-time order tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#fe6b35] text-sm">✓</span>
                </div>
                <span className="font-poppins">Exclusive app-only discounts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#fe6b35] text-sm">✓</span>
                </div>
                <span className="font-poppins">Save your favorite orders</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-poppins">
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-poppins">
                <div className="text-left">
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="relative animate-fade-in">
            <div className="relative mx-auto max-w-md">
              {/* Main Phone */}
              <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-96 bg-gradient-to-br from-[#FFEDD5] to-[#FED7AA] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📱</div>
                      <div className="text-2xl font-bold text-[#fe6b35] mb-2 font-poppins">QuickEat</div>
                      <div className="text-gray-600 font-poppins">Order. Track. Enjoy.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="absolute -left-8 top-8 bg-gray-900 rounded-3xl p-3 shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500 scale-75 opacity-80">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">🍕</div>
                      <div className="text-sm font-bold text-[#fe6b35] font-poppins">Track Order</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
