export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TechnologyItem {
  name: string;
  category: string;
  iconType: string; // e.g., 'svg' or a styling class
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageStyle: 'terminal' | 'security' | 'network' | 'dashboard';
  tags: string[];
  link?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}
