
import React from 'react';

interface StarIconProps {
  filled: boolean;
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ filled, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-slate-600'} ${className || ''}`}
    fill="currentColor"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default StarIcon;