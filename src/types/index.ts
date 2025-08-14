export interface Committee {
  id: string;
  name: string;
  description: string;
  topics: string[];
  language: string;
  delegates: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  quote: string;
  year: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
}