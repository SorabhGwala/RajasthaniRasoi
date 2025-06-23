"use client";

import React from 'react';

const PopularRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Chokhi Dhani',
      image: 'https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/sanjeev-kapoor/media/media_files/4vWdXREXITODyLjtPAKy.jpg',
      rating: 4.9,
      category: 'Rajasthani Thali',
      distance: '1.0 km',
      deliveryTime: '30-35 min',
      tags: ['Dal Baati', 'Churma', 'Thali']
    },
    {
      id: 2,
      name: 'Surya Mahal',
      image: 'https://lh3.googleusercontent.com/p/AF1QipPFV6ZLi5954OXwQDK0ei9C-FTGHMEuCZbuIg0N=s1360-w1360-h1020-rw',
      rating: 4.7,
      category: 'Authentic Rajasthani',
      distance: '2.3 km',
      deliveryTime: '25-30 min',
      tags: ['Gatte ki Sabzi', 'Missi Roti', 'Ker Sangri']
    },
    {
      id: 3,
      name: 'Rawat Misthan Bhandar',
      image: 'https://www.sweedesi.com/cdn/shop/products/mawa-kachori-agarwal-caterers-174042.jpg?v=1740033731',
      rating: 4.6,
      category: 'Traditional Sweets',
      distance: '0.8 km',
      deliveryTime: '20-25 min',
      tags: ['Kachori', 'Ghewar', 'Mawa']
    },
    {
      id: 4,
      name: 'Laxmi Misthan Bhandar (LMB)',
      image: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Achari_Paneer_Recipe_7.jpg',
      rating: 4.8,
      category: 'Heritage Veg',
      distance: '1.5 km',
      deliveryTime: '30-35 min',
      tags: ['Thali', 'Paneer Dishes', 'Sweets']
    },
    {
      id: 5,
      name: 'Rajasthan Dhaba Express',
      image: 'https://maayeka.com/wp-content/uploads/2017/10/PAPAD-BOONDI-KI-SABJI-3.jpg',
      rating: 4.5,
      category: 'Dhaba Style',
      distance: '3.0 km',
      deliveryTime: '35-40 min',
      tags: ['Papad ki Sabzi', 'Sev Tamatar', 'Roti']
    },
    {
      id: 6,
      name: 'Moti Mahal Rajasthani Delights',
      image: 'https://www.chefkunalkapur.com/wp-content/uploads/2022/01/methi-bajra-paratha-1300x865.jpg?v=1643163756',
      rating: 4.6,
      category: 'Premium Dining',
      distance: '2.1 km',
      deliveryTime: '30-35 min',
      tags: ['Laal Maas', 'Bajra Roti', 'Garlic Chutney']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Popular <span className="text-[#fe6b35]">Rajasthani Restaurants</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
            Enjoy authentic flavors of Rajasthan delivered to your doorstep!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow-md">
                  <span className="text-sm font-semibold text-[#fe6b35] font-poppins">
                    ⭐ {restaurant.rating}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-[#fe6b35] text-white rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold font-poppins">{restaurant.deliveryTime}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#fe6b35] transition-colors duration-300 font-poppins">
                    {restaurant.name}
                  </h3>
                  <span className="text-sm text-gray-500 font-poppins">{restaurant.distance}</span>
                </div>

                <p className="text-gray-600 mb-3 font-poppins">{restaurant.category}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-[#FFEDD5] hover:text-[#C2410C] transition-colors duration-300 font-poppins"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-[#fe6b35] text-white py-3 rounded-lg font-semibold hover:bg-[#EA580C] transition-all duration-300 transform hover:scale-105 font-poppins">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurants;
