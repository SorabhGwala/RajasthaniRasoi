"use client";

import React from 'react';

const FoodCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Dal Baati Churma',
      icon: '🍛',
      color: 'from-yellow-600 to-yellow-800',
      dishes: '10+ dishes'
    },
    {
      id: 2,
      name: 'Laal Maas',
      icon: '🌶️',
      color: 'from-red-500 to-red-700',
      dishes: '8+ dishes'
    },
    {
      id: 3,
      name: 'Gatte ki Sabzi',
      icon: '🥘',
      color: 'from-orange-400 to-orange-600',
      dishes: '12+ dishes'
    },
    {
      id: 4,
      name: 'Ker Sangri',
      icon: '🌿',
      color: 'from-green-400 to-green-600',
      dishes: '6+ dishes'
    },
    {
      id: 5,
      name: 'Mawa Kachori',
      icon: '🍩',
      color: 'from-pink-400 to-pink-600',
      dishes: '4+ dishes'
    },
    {
      id: 6,
      name: 'Rajasthani Thali',
      icon: '🍽️',
      color: 'from-purple-500 to-purple-700',
      dishes: '20+ dishes'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Rajasthani <span className="text-[#fe6b35]">Specials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
            Taste the tradition of Rajasthan with these royal dishes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-8 text-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#fe6b35] transition-colors duration-300 font-poppins">
                  {category.name}
                </h3>
                <p className="text-gray-600 font-poppins">{category.dishes}</p>
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#fe6b35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#fe6b35] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
