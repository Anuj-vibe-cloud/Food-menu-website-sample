import React from 'react';

interface Offer {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Placeholder
  dealLink: string; // Placeholder
}

const specialOffersData: Offer[] = [
  {
    id: 'offer1',
    title: 'Combo Bonanza!',
    description: 'Get our signature Blaze Burger, Crispy Fries, and a Large Soda for just $15.99! Limited time offer.',
    imageUrl: 'combo_bonanza.jpg',
    dealLink: '#combo-deal',
  },
  {
    id: 'offer2',
    title: 'Weekend Family Feast',
    description: '2 Large Pizzas, a family-size salad, and a 2-liter drink. Perfect for your weekend gathering. Only $39.99!',
    imageUrl: 'family_feast.jpg',
    dealLink: '#family-feast',
  },
  {
    id: 'offer3',
    title: 'Dessert Delight',
    description: 'Buy any main course and get 50% off on our decadent Chocolate Lava Cake. Sweeten your meal!',
    imageUrl: 'dessert_delight.jpg',
    dealLink: '#dessert-deal',
  },
];

const OfferCard: React.FC<{ offer: Offer }> = ({ offer }) => {
  return (
    <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30">
      <div className="w-full h-48 bg-slate-700 flex items-center justify-center text-slate-400">
        {/* Placeholder for image */}
        <span className="text-sm">(Image: {offer.imageUrl})</span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-orange-400 mb-3 font-montserrat">{offer.title}</h3>
        <p className="text-slate-300 text-sm mb-4 h-20 overflow-y-auto">{offer.description}</p>
        <a
          href={offer.dealLink}
          className="inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded-md text-sm hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          View Deal
        </a>
      </div>
    </div>
  );
};

const SpecialOffersSection: React.FC = () => {
  return (
    <section id="special-offers" className="py-12 sm:py-16"> {/* Reduced padding as it's within a gapped flex container */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500">
            Today's Special Offers
          </h2>
          <p className="mt-3 text-lg text-slate-300 max-w-xl mx-auto">
            Don't miss out on these amazing deals, available for a limited time!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {specialOffersData.map(offer => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
