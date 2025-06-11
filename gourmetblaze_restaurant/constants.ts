
import { FoodCategory, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'menu', label: 'Menu', href: '#menu' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const FOOD_CATEGORIES: FoodCategory[] = [
  {
    id: 'starters',
    name: 'Starters',
    items: [
      { id: 's1', name: 'Crispy Spring Rolls', price: 12, rating: 4, image: 'https://picsum.photos/seed/springrolls/400/300' },
      { id: 's2', name: 'Cheesy Garlic Bread', price: 10, rating: 5, image: 'https://picsum.photos/seed/garlicbread/400/300' },
      { id: 's3', name: 'Loaded Nachos Supreme', price: 15, rating: 4, image: 'https://picsum.photos/seed/nachos/400/300' },
    ],
  },
  {
    id: 'main-course',
    name: 'Main Course',
    items: [
      { id: 'm1', name: 'Gourmet Angus Cheeseburger', price: 22, rating: 5, image: 'https://picsum.photos/seed/cheeseburger/400/300' },
      { id: 'm2', name: 'Creamy Truffle Pasta', price: 25, rating: 4, image: 'https://picsum.photos/seed/trufflepasta/400/300' },
      { id: 'm3', name: 'Grilled Lemon Herb Chicken', price: 20, rating: 4, image: 'https://picsum.photos/seed/grilledchicken/400/300' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { id: 'd1', name: 'Molten Chocolate Lava Cake', price: 14, rating: 5, image: 'https://picsum.photos/seed/lavacake/400/300' },
      { id: 'd2', name: 'Seasonal Fruit Tart', price: 13, rating: 4, image: 'https://picsum.photos/seed/fruittart/400/300' },
      { id: 'd3', name: 'Classic Ice Cream Sundae', price: 11, rating: 4, image: 'https://picsum.photos/seed/sundae/400/300' },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    items: [
      { id: 'b1', name: 'Refreshing Lemon Mojito', price: 9, rating: 4, image: 'https://picsum.photos/seed/mojito/400/300' },
      { id: 'b2', name: 'Iced Caramel Cold Coffee', price: 8, rating: 5, image: 'https://picsum.photos/seed/coldcoffee/400/300' },
      { id: 'b3', name: 'Mixed Berry Smoothie', price: 10, rating: 4, image: 'https://picsum.photos/seed/berrysmoothie/400/300' },
    ],
  },
];