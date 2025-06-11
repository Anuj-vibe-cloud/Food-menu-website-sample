import React from 'react';
import StarIcon from './icons/StarIcon'; // Assuming StarIcon is in the same icons directory or path is adjusted

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number; // e.g., 4 or 5
  avatarUrl?: string; // Optional: for customer image
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah L.',
    quote: "The ambiance and the food were both exceptional! The 3D menu was a fantastic touch. Highly recommend the grilled salmon.",
    rating: 5,
    avatarUrl: 'placeholder_avatar_1.png', // Placeholder
  },
  {
    id: 2,
    name: 'Mike P.',
    quote: "A truly unique dining experience. The flavors were bold and fresh. I appreciated the attention to detail in every dish.",
    rating: 4,
    avatarUrl: 'placeholder_avatar_2.png', // Placeholder
  },
  {
    id: 3,
    name: 'Jessica Chen',
    quote: "Loved the innovative approach to classic dishes. The service was top-notch and the atmosphere was very inviting. Will be back!",
    rating: 5,
  },
];

const RatingDisplay: React.FC<{ rating: number; maxStars?: number }> = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => (
        <StarIcon key={index} filled={index < rating} className="w-5 h-5" />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-orange-500/30 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        {testimonial.avatarUrl && (
          <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-500 text-xs mr-4">
            {/* Placeholder for avatar: {testimonial.avatarUrl} */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        )}
        <div>
          <h4 className="text-lg font-semibold text-slate-100 font-montserrat">{testimonial.name}</h4>
          <RatingDisplay rating={testimonial.rating} />
        </div>
      </div>
      <p className="text-slate-300 text-sm italic leading-relaxed">"{testimonial.quote}"</p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-montserrat">
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Hear from those who've experienced the magic of GourmetBlaze.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
