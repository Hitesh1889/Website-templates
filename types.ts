
export interface Template {
  id: string;
  name: string;
  niche: string;
  description: string;
  imageUrl: string;
  price: string;
  features: string[];
  demoUrl?: string; // Link to a simulated demo
}

export enum NicheType {
  ALL = 'All',
  BUSINESS = 'Business',
  ECOMMERCE = 'E-commerce',
  PORTFOLIO = 'Portfolio',
  RESTAURANT = 'Restaurant',
  REAL_ESTATE = 'Real Estate',
  HEALTH = 'Health',
  EDUCATION = 'Education',
  FITNESS = 'Fitness',
  LAW = 'Law',
  PHOTOGRAPHY = 'Photography',
  ARCHITECTURE = 'Architecture'
}
