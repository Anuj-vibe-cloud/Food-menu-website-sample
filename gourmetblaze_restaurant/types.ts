
export interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number; // 1 to 5
  image: string; // URL to image
  description?: string; // Optional short description
}

export interface FoodCategory {
  id: string;
  name: string;
  items: FoodItem[];
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}