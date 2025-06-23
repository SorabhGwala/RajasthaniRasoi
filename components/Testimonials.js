"use client";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      text: "QuickEat ne mera dinner time itna easy kar diya! Bhook lagti hai, aur ek click me khaana milta hai. Bahut hi fast service!",
      location: "Delhi",
    },
    {
      id: 2,
      name: "Priya Verma",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      text: "Yeh app toh kamaal ki hai! Real-time tracking aur tasty khana – mujhe bahut pasand aaya. Offers bhi kaafi ache milte hain.",
      location: "Mumbai",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      text: "Mujhe ghar ke aaspaas ke sabhi best restaurants is app me mil gaye. Customer support bhi badiya hai!",
      location: "Bangalore",
    },
    {
      id: 4,
      name: "Ananya Rao",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "QuickEat ki delivery bahut fast aur reliable hai. Exclusive app deals ne mujhe repeat customer bana diya hai!",
      location: "Hyderabad",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            What Our <span className="text-[#F97316]">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
            Hear from our happy Indian customers across major cities
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-50 rounded-2xl p-8 md:p-12 mx-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-white"
                        />
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">
                              ⭐
                            </span>
                          ))}
                        </div>

                        <blockquote className="text-lg md:text-xl text-gray-700 mb-4 font-poppins leading-relaxed italic">
                          "{testimonial.text}"
                        </blockquote>

                        <div>
                          <div className="font-bold text-gray-900 text-lg font-poppins">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600 font-poppins">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#F97316] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Customer Stats with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4206/4206277.png"
              alt="Satisfied Customers"
              className="w-16 h-16 mx-auto mb-4"
            />
            <div className="text-4xl font-bold text-[#F97316] mb-2 font-poppins">
              98%
            </div>
            <div className="text-gray-600 font-poppins">
              of Indian users feel <strong>totally satisfied</strong> after ordering with QuickEat
            </div>
          </div>

          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="Fast Delivery"
              className="w-16 h-16 mx-auto mb-4"
            />
            <div className="text-4xl font-bold text-[#F97316] mb-2 font-poppins">
              15 min
            </div>
            <div className="text-gray-600 font-poppins">
              Average delivery time in <strong>urban India</strong> — hot and fresh!
            </div>
          </div>

          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
              alt="24/7 Support"
              className="w-16 h-16 mx-auto mb-4"
            />
            <div className="text-4xl font-bold text-[#F97316] mb-2 font-poppins">
              24/7
            </div>
            <div className="text-gray-600 font-poppins">
              Friendly <strong>support team</strong> available anytime, anywhere in India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
