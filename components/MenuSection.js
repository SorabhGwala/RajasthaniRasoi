"use client";

import React, { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const MenuSection = () => {
  const [cartItems, setCartItems] = useState([]);

  const dishes = [
    { id: 1, name: "Dal Baati Churma", image: "https://assets.cntraveller.in/photos/64c77e630d528c30692aaa58/4:3/w_1440,h_1080,c_limit/dal%20bhaati%20lead.jpeg", price: 14.99, rating: 4.9, description: "Traditional Rajasthani dish of baked wheat balls, lentils & sweet churma.", category: "Thali" },
    { id: 2, name: "Laal Maas", image: "https://images.slurrp.com/prod/recipe_images/transcribe/lunch/Dal_baati_churma.webp", price: 18.49, rating: 4.8, description: "Spicy red mutton curry made with Mathania chilies.", category: "Non-Veg" },
    { id: 3, name: "Gatte Ki Sabzi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4e_vPA1kUJDh5vac936LmNC-ORNIAxu6ycw&s", price: 12.99, rating: 4.6, description: "Besan dumplings in curd-based spicy gravy.", category: "Veg" },
    { id: 4, name: "Ker Sangri", image: "https://chandravilas.com/wp-content/uploads/2025/04/Pachkuta.jpeg", price: 13.49, rating: 4.5, description: "A dry dish made of wild berries and beans, unique to Rajasthan.", category: "Dry Veg" },
    { id: 5, name: "Rajasthani Kadhi", image: "https://c.ndtvimg.com/2023-03/s3gae1p_kadhi_625x300_24_March_23.jpg", price: 10.99, rating: 4.4, description: "Tangy yogurt-based curry without pakoras, served with rice or roti.", category: "Curry" },
    { id: 6, name: "Mawa Kachori", image: "https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/rajasthani-sweet-recipes-from-mawa-kachori-and-more/mawa-kachori-featured.webp", price: 8.49, rating: 4.7, description: "Deep-fried pastry filled with mawa and nuts, soaked in sugar syrup.", category: "Desserts" },
    { id: 7, name: "Panchmel Dal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIpTFL7vImAtKVjj5M3dbQiJyT73vyDy3BQ&s", price: 11.49, rating: 4.5, description: "Combination of 5 different lentils tempered with spices.", category: "Lentils" },
    { id: 8, name: "Sev Ki Sabzi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxE065IWEKWzKBNbx5bcRDfqRbz9W_SEzjQ&s", price: 11.99, rating: 4.6, description: "Spicy curry made from crispy besan sev cooked in tomato-onion gravy.", category: "Veg Curry" },
    { id: 10, name: "Ghewar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTlXf9IS67UGvVId9RJR37-cl31VH4QElnw&s", price: 7.99, rating: 4.8, description: "Honeycomb-like dessert soaked in syrup, topped with rabri.", category: "Sweets" },
  ];

  const getCartQuantity = (dishId) => {
    const item = cartItems.find((item) => item.id === dishId);
    return item ? item.quantity : 0;
  };

  const addToCart = (dishId) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === dishId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === dishId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: dishId, quantity: 1 }];
    });
  };

  const removeFromCart = (dishId) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === dishId);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.id === dishId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prev.filter((item) => item.id !== dishId);
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Our Special <span className="text-[#F97316]">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
            Discover our chefs special dishes made with the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => {
            const quantity = getCartQuantity(dish.id);
            return (
              <div
                key={dish.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow-md">
                    <span className="text-sm font-semibold text-[#F97316] font-poppins">
                      ⭐ {dish.rating}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#F97316] text-white rounded-full px-3 py-1">
                    <span className="text-sm font-semibold font-poppins">
                      {dish.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F97316] transition-colors duration-300 font-poppins">
                      {dish.name}
                    </h3>
                    <span className="text-2xl font-bold text-[#F97316] font-poppins">
                      ${dish.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 font-poppins leading-relaxed">
                    {dish.description}
                  </p>

                  {quantity === 0 ? (
                    <Button
                      onClick={() => addToCart(dish.id)}
                      className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg font-poppins"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  ) : (
                    <div className="flex items-center justify-between bg-orange-50 rounded-lg p-2">
                      <Button
                        onClick={() => removeFromCart(dish.id)}
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>

                      <span className="font-bold text-[#F97316] font-poppins text-lg">
                        {quantity}
                      </span>

                      <Button
                        onClick={() => addToCart(dish.id)}
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
