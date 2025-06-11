import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
      {/* Tailwind classes used:
          - flex, justify-center, items-center, h-full: For centering the spinner
          - w-16, h-16: Spinner size
          - border-4, border-dashed, rounded-full: Spinner appearance
          - animate-spin: Tailwind's built-in spin animation
          - border-orange-500: Spinner color, matching the site's theme
      */}
    </div>
  );
};

export default LoadingSpinner;
