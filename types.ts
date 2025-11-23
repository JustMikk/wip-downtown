export interface Service {
  id: string;
  name: string;
  category: 'Cut' | 'Color' | 'Treatment' | 'Styling' | 'Smoothing';
  price: string | number;
  duration: number; // in minutes
  description: string;
  fullDescription: string;
  imageUrl: string;
  benefits: string[];
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  bio?: string;
  specialties?: string[];
}

export interface BookingItem {
  service: Service;
  stylistId?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface VisualProofItem {
  id: string;
  imageUrl: string;
  serviceName: string;
  stylistName?: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  service: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}