export interface ServiceItem {
  id: string;
  title: string;
  category: 'coordination' | 'decor' | 'customization';
  tagline: string;
  description: string;
  benefits: string[];
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Event Decor' | 'Tablescapes' | 'Backdrops' | 'Customized Products' | 'Customized Apparel' | 'Celebrations';
  description: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  tags: string[];
}

export interface CustomProductCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  examples: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  estimatedGuestCount: string;
  servicesNeeded: string[];
  customRequest: string;
  budgetRange: string;
  additionalDetails: string;
}
