import React from 'react';

interface Chef {
  id: number;
  name: string;
  bio: string;
  imageUrl: string; // For now, this will be a placeholder string
}

const chefsData: Chef[] = [
  {
    id: 1,
    name: 'Chef Antoine Dubois',
    bio: 'With over 20 years of experience in French cuisine, Chef Antoine brings a touch of classic European elegance to our kitchen. His passion for fresh, local ingredients is legendary.',
    imageUrl: 'placeholder_chef_1.jpg', // Replace with actual image path or URL later
  },
  {
    id: 2,
    name: 'Chef Maria Rodriguez',
    bio: 'Chef Maria specializes in vibrant Latin American flavors. Her innovative dishes are a fusion of traditional recipes and modern culinary techniques, creating an unforgettable dining experience.',
    imageUrl: 'placeholder_chef_2.jpg',
  },
  {
    id: 3,
    name: 'Chef Kenji Tanaka',
    bio: 'Master of Sushi and Japanese gastronomy, Chef Kenji’s precision and artistry are evident in every dish. He believes in the purity of flavor and the beauty of simplicity.',
    imageUrl: 'placeholder_chef_3.jpg',
  },
];

const ChefCard: React.FC<{ chef: Chef }> = ({ chef }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40">
      <div className="w-full h-56 bg-slate-700 flex items-center justify-center text-slate-500">
        {/* Placeholder for image */}
        <span className="text-sm">Image: {chef.imageUrl}</span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2 font-montserrat">{chef.name}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{chef.bio}</p>
      </div>
    </div>
  );
};

const ChefsSection: React.FC = () => {
  return (
    <section id="chefs" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-montserrat">
            Meet Our <span className="text-orange-500">Chefs</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Our culinary team is composed of passionate and experienced chefs dedicated to crafting exceptional dishes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {chefsData.map(chef => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
