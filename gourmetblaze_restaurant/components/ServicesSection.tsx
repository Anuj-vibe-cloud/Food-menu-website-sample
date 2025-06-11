import React from 'react';

interface ServiceItemProps {
  icon: string; // Placeholder for an icon, e.g., SVG or font icon class
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-shadow duration-300">
      {/* Placeholder for icon */}
      <div className="text-orange-500 mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-slate-100">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: '🍽️', // Example emoji icon
      title: 'Online Ordering',
      description: 'Conveniently order your favorite meals online for pickup or delivery.',
    },
    {
      id: 2,
      icon: '🎉', // Example emoji icon
      title: 'Private Events',
      description: 'Host your special occasions with us. We cater to parties and corporate events.',
    },
    {
      id: 3,
      icon: '🚚', // Example emoji icon
      title: 'Home Delivery',
      description: 'Enjoy our delicious food in the comfort of your home with our fast delivery service.',
    },
     {
      id: 4,
      icon: '🧑‍🍳', // Example emoji icon
      title: 'Expert Catering',
      description: 'Let us handle the food for your next event with our professional catering services.',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-montserrat">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            We offer a range of services to enhance your dining experience, from easy online ordering to memorable private events.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceItem
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
