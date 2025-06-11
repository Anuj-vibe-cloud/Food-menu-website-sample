import React from 'react';
import InteractiveMenuCard from './InteractiveMenuCard';
import { FoodItem } from '../types'; // Assuming FoodItem includes necessary fields

// Sample data for interactive cards. Adapting from FoodItem structure.
const interactiveMenuItems: Array<FoodItem & { description: string; ingredients: string[] }> = [
  {
    id: 'im1',
    name: 'Deluxe Burger Flip',
    price: 24, // Assuming price is number here, will convert to string for card
    rating: 5, // Not used by InteractiveMenuCard directly, but part of FoodItem
    image: 'deluxe_burger_flip.jpg', // Placeholder
    description: 'A mouth-watering experience! Our signature patty with special sauce, crisp lettuce, and aged cheddar, flipped to perfection.',
    ingredients: ['Angus Beef Patty', 'Special Sauce', 'Aged Cheddar', 'Lettuce', 'Tomato', 'Brioche Bun'],
  },
  {
    id: 'im2',
    name: 'Mystic Pasta Twirl',
    price: 28,
    rating: 4,
    image: 'mystic_pasta_twirl.jpg', // Placeholder
    description: 'Handmade pasta tossed in a creamy Alfredo sauce with a hint of truffle, revealing hidden herbs and spices on the flip.',
    ingredients: ['Handmade Fettuccine', 'Creamy Alfredo', 'Truffle Oil', 'Parmesan', 'Secret Herbs'],
  },
  {
    id: 'im3',
    name: 'Volcano Choco Lava',
    price: 16,
    rating: 5,
    image: 'volcano_choco_lava.jpg', // Placeholder
    description: 'An eruption of rich dark chocolate. Warm, gooey center that flows like lava. The back tells its sweet story.',
    ingredients: ['Dark Chocolate', 'Cocoa Powder', 'Butter', 'Egg', 'Flour', 'Vanilla Essence'],
  },
];

const InteractiveMenuSection: React.FC = () => {
  return (
    <section id="interactive-menu" className="py-16 sm:py-24 bg-slate-800/50"> {/* Slightly different bg for distinction */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-montserrat">
            Interactive <span className="text-orange-500">Showcase</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Click on our featured items to see more details!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {interactiveMenuItems.map(item => (
            <InteractiveMenuCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={`$${item.price.toFixed(2)}`}
              imageUrl={item.image}
              description={item.description}
              ingredients={item.ingredients}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMenuSection;
