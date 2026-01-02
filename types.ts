
export interface Template {
  id: string;
  name: string;
  niche: string;
  description: string;
  imageUrl: string;
  price: string;
  features: string[];
}

export enum NicheType {
  ALL = 'All',
  BUSINESS = 'Business',
  ECOMMERCE = 'E-commerce',
  PORTFOLIO = 'Portfolio',
  RESTAURANT = 'Restaurant',
  REAL_ESTATE = 'Real Estate',
  HEALTH = 'Health',
  EDUCATION = 'Education'
}
