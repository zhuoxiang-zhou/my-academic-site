export interface Paper {
  id: string;
  title: string;
  authors: string[];
  journal?: string;
  year: number;
  status: 'Working Paper' | 'Published' | 'Work in Progress';
  abstract: string;
  link?: string;
  pdfUrl?: string;
  topics?: string[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  level: 'Undergraduate' | 'Graduate' | 'PhD';
  description: string;
  syllabusUrl?: string;
  semester: string;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
  location?: string;
  description?: string;
  size?: 'tall' | 'extra-tall' | 'wide' | 'extra-wide' | 'normal' | 'large' | null;
  aspectRatio?: string | null;
  column: number;
  order: number;
}

export interface Note {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}