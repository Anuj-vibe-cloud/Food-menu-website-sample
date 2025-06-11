import React, { useState } from 'react';

interface InteractiveMenuCardProps {
  id: string;
  name: string;
  price: string;
  imageUrl: string; // Placeholder, actual images not handled here
  description: string;
  ingredients: string[];
}

const InteractiveMenuCard: React.FC<InteractiveMenuCardProps> = ({
  name,
  price,
  imageUrl,
  description,
  ingredients,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Basic styling for the flip effect will be defined here.
  // More complex 3D effects might need global CSS or a styled-components approach
  // which are beyond simple file creation with current tools.
  // We'll use Tailwind for as much as possible.

  const cardBaseStyle = "w-full h-80 rounded-lg shadow-xl cursor-pointer transition-transform duration-700 preserve-3d";
  const cardFaceStyle = "absolute w-full h-full rounded-lg backface-hidden overflow-hidden";

  return (
    <div
      className="perspective group" // 'perspective' class would need to be defined in CSS for 3D effect
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`${cardBaseStyle} ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front Face */}
        <div
          className={`${cardFaceStyle} bg-slate-700 p-4 flex flex-col justify-between items-center text-center`}
          style={{ zIndex: isFlipped ? 0 : 1, transform: "rotateY(0deg)" }}
        >
          <div className="w-full h-3/5 bg-slate-600 mb-2 flex items-center justify-center">
            <span className="text-slate-400 text-sm">(Placeholder: {imageUrl})</span>
          </div>
          <h3 className="text-xl font-bold text-orange-400 font-montserrat">{name}</h3>
          <p className="text-lg font-semibold text-slate-100">{price}</p>
        </div>

        {/* Back Face */}
        <div
          className={`${cardFaceStyle} bg-slate-800 p-4 flex flex-col items-center text-center rotate-y-180`}
          style={{ zIndex: isFlipped ? 1 : 0, transform: "rotateY(180deg)" }}
        >
          <h4 className="text-lg font-semibold text-orange-500 mb-2 font-montserrat">Details</h4>
          <p className="text-sm text-slate-300 mb-3 overflow-y-auto h-2/5">{description}</p>
          <h5 className="text-md font-semibold text-orange-400 mb-1">Ingredients:</h5>
          <ul className="text-xs text-slate-400 list-disc list-inside pl-2 overflow-y-auto">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Need to add some CSS to index.css for the 3D effects if not covered by Tailwind
// For example:
// .perspective { perspective: 1000px; }
// .preserve-3d { transform-style: preserve-3d; }
// .rotate-y-180 { transform: rotateY(180deg); } (though might be applied via state)
// .backface-hidden { backface-visibility: hidden; }

export default InteractiveMenuCard;
