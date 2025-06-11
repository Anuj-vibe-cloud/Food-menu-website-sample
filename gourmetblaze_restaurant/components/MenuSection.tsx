
import React from 'react';
import { FoodCategory } from '../types';
import FoodItemCard from './FoodItemCard';

interface MenuSectionProps {
  id: string;
  title: string;
  categories: FoodCategory[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ id, title, categories }) => {
  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 font-montserrat">
          {title.split(' ').map((word, index) =>
            index === 1 ? <span key={index} className="text-orange-500">{word} </span> : <span key={index}>{word} </span>
          )}
        </h2>

        {categories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-16 last:mb-0">
            <h3 className="text-3xl font-semibold text-slate-100 mb-8 relative pb-2
                           after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-orange-500">
              {category.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <FoodItemCard
                  key={item.id}
                  item={item}
                  // Staggered animation delay
                  animationDelay={`${categoryIndex * 0.1 + itemIndex * 0.05}s`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;