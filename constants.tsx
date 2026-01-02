
import { Template, NicheType } from './types';

export const TEMPLATES: Template[] = [
  {
    id: '1',
    name: 'Zenith Corporate',
    niche: NicheType.BUSINESS,
    description: 'Modern, clean, and professional layout for tech companies.',
    imageUrl: 'https://picsum.photos/seed/biz1/800/600',
    price: '$49',
    features: ['Responsive', 'SEO Optimized', 'Figma Files Included']
  },
  {
    id: '2',
    name: 'Luxe Real Estate',
    niche: NicheType.REAL_ESTATE,
    description: 'High-end property listing template with map integration.',
    imageUrl: 'https://picsum.photos/seed/re1/800/600',
    price: '$79',
    features: ['Property Maps', 'Advanced Filters', 'MLS Support']
  },
  {
    id: '3',
    name: 'Gourmet Bistro',
    niche: NicheType.RESTAURANT,
    description: 'Elegant dining experience with reservation system UI.',
    imageUrl: 'https://picsum.photos/seed/rest1/800/600',
    price: '$59',
    features: ['Menu Builder', 'Reservation UI', 'Photo Gallery']
  },
  {
    id: '4',
    name: 'Studio Minimal',
    niche: NicheType.PORTFOLIO,
    description: 'Minimalist approach for designers and photographers.',
    imageUrl: 'https://picsum.photos/seed/port1/800/600',
    price: '$39',
    features: ['Masonry Grid', 'Dark Mode', 'Case Study Templates']
  },
  {
    id: '5',
    name: 'ShopSphere Pro',
    niche: NicheType.ECOMMERCE,
    description: 'Powerful e-commerce engine with cart and checkout flows.',
    imageUrl: 'https://picsum.photos/seed/shop1/800/600',
    price: '$99',
    features: ['Stripe Integration Ready', 'Inventory Management', 'Reviews System']
  },
  {
    id: '6',
    name: 'Vitality Health',
    niche: NicheType.HEALTH,
    description: 'Wellness and medical clinic appointment management.',
    imageUrl: 'https://picsum.photos/seed/health1/800/600',
    price: '$69',
    features: ['Booking System', 'Patient Portal UI', 'Service Grid']
  },
  {
    id: '7',
    name: 'EduStream',
    niche: NicheType.EDUCATION,
    description: 'Complete LMS layout for online courses and tutors.',
    imageUrl: 'https://picsum.photos/seed/edu1/800/600',
    price: '$89',
    features: ['Course Dashboard', 'Quiz Components', 'Video Player']
  },
  {
    id: '8',
    name: 'Velocity SaaS',
    niche: NicheType.BUSINESS,
    description: 'The ultimate conversion-focused landing page for SaaS.',
    imageUrl: 'https://picsum.photos/seed/saas1/800/600',
    price: '$59',
    features: ['Pricing Tables', 'A/B Tested Hero', 'Integrations Logos']
  }
];
