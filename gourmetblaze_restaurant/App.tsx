
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FoodCard from './components/FoodCard'; // Import FoodCard
import MenuSection from './components/MenuSection';
import ServicesSection from './components/ServicesSection';
import ChefsSection from './components/ChefsSection';
import TestimonialsSection from './components/TestimonialsSection';
import InteractiveMenuSection from './components/InteractiveMenuSection';
import SpecialOffersSection from './components/SpecialOffersSection'; // Import Special Offers
import Footer from './components/Footer';
import { FOOD_CATEGORIES } from './constants';

// Data for the 3-item FoodCard grid
const foodItemsData = [
  { name: "Cheeseburger Supreme", imageUrl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg", price: "$34", rating: "★★★★☆" },
  { name: "Grilled Cheese Deluxe", imageUrl: "https://cdn.pixabay.com/photo/2017/03/17/19/52/grilled-cheese-2157114_1280.jpg", price: "$22", rating: "★★★★☆" },
  { name: "Veggie Pizza Slice", imageUrl: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg", price: "$18", rating: "★★★★☆" }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />

        {/* 3-Card Grid Section */}
        <section id="featured-items" className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 font-montserrat text-white">
              Featured <span className="text-orange-400">Selections</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {foodItemsData.map(item => (
                <FoodCard key={item.name} name={item.name} imageUrl={item.imageUrl} price={item.price} rating={item.rating} />
              ))}
            </div>
          </div>
        </section>

        <MenuSection id="menu" title="Our Culinary Delights" categories={FOOD_CATEGORIES} />
        <ServicesSection />
        <ChefsSection />
        <TestimonialsSection />
        <InteractiveMenuSection />
        <SpecialOffersSection /> {/* Add Special Offers Section here */}
        {/* Add more sections as needed, e.g., About Us, Testimonials */}
      </main>
      <Footer />
    </div>
  );
};

export default App;