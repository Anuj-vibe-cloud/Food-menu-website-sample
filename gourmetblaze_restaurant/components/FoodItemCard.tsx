
import React, { useState, useEffect } from 'react';
import { FoodItem } from '../types'; // Corrected import path
import StarIcon from './icons/StarIcon';

interface FoodItemCardProps {
  item: FoodItem;
  animationDelay?: string; // e.g., '0s', '0.1s'
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({ item, animationDelay = '0s' }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Parse the delay string, e.g., "0.1s" into milliseconds
    const delayValue = parseFloat(animationDelay.replace('s', '')) * 1000;

    const timer = setTimeout(() => {
      setAnimate(true);
    }, delayValue);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount, using the initial animationDelay value.

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} filled={i <= rating} />);
    }
    return stars;
  };

  return (
    <div
      className={`
        group bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl
        transform hover:shadow-orange-500/30 hover:-translate-y-2 hover:scale-105
        transition-all duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)]
        ${animate ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}
      `}
    >
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Hot
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h4 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-2 truncate group-hover:text-orange-400 transition-colors duration-300">{item.name}</h4>

        <div className="flex items-center justify-between mb-3">
          <p className="text-2xl font-bold text-orange-500">${item.price.toFixed(2)}</p>
          <div className="flex items-center">
            {renderStars(item.rating)}
            <span className="ml-2 text-sm text-slate-400">({item.rating}.0)</span>
          </div>
        </div>

        {item.description && (
          <p className="text-sm text-slate-400 mb-4 h-10 overflow-hidden">
            {item.description.length > 60 ? item.description.substring(0, 57) + '...' : item.description}
          </p>
        )}

        <button
          className="w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg
                     hover:bg-orange-600 transition-all duration-300 transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75
                     shadow-md hover:shadow-lg"
        >
          Order Now
        </button>
      </div>
      {/* The <style jsx global> block and inline style for animation have been removed. */}
    </div>
  );
};

export default FoodItemCard;