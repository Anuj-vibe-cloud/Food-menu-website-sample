
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner'; // Import the spinner

const HeroSection: React.FC = () => {
  const [isBurgerLoading, setIsBurgerLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the burger animation
    const timer = setTimeout(() => {
      setIsBurgerLoading(false);
    }, 2000); // Adjust delay as needed (e.g., 2 seconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-800 pt-20 pb-10 px-4">
      {/* Background elements for depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Example: subtle pattern or shapes */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(249,115,22,0.1)" strokeWidth="0.5"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-around w-full max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight font-montserrat hero-text-shadow">
            Experience <span className="text-orange-500">Flavor</span><br /> Like Never Before
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-md mx-auto lg:mx-0">
            Dive into Gourmet Blaze, where culinary art meets digital magic. Explore our 3D animated menu and ignite your senses.
          </p>
          <a
            href="#menu"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Explore Menu
          </a>
        </div>

        {/* 3D Burger Animation Area */}
        <div className="lg:w-1/2 h-[250px] flex justify-center items-center animate-fadeInRight" style={{ animationDelay: '0.5s' }}>
          {isBurgerLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="burger-scene">
              <div className="burger-pivot">
                <div className="burger-layer bun-top"></div>
                <div className="burger-layer lettuce"></div>
                <div className="burger-layer cheese"></div>
                <div className="burger-layer patty"></div>
                <div className="burger-layer bun-bottom"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll down indicator (optional) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a href="#menu" aria-label="Scroll to menu">
          <svg className="w-8 h-8 text-orange-500 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;