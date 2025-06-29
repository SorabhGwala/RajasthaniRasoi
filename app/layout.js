// app/layout.js (or app/layout.jsx)

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FoodCategories from '@/components/FoodCategories';
import PopularRestaurants from '@/components/PopularRestaurants';
import MenuSection from '@/components/MenuSection';
// import AppDownload from '@/components/AppDownload';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'QuickEat - Food App',
  description: 'Food Delivery App UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  
      </head>
      <body className="font-poppins">
        <Header />
        <Hero />
        <FoodCategories />
        <PopularRestaurants />
        <MenuSection />
        {/* <AppDownload /> */}
        <Testimonials />
        {children}
        <Footer />
      </body>
    </html>
  );
}
