export interface Paper {
  id: string;
  title: string;
  authors: string[];
  authorLinks?: Record<string, string>;
  journal?: string;
  journalStatus?: string;
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
  title: string;
  location: string;
  year?: number;
  literaryQuote: {
    text: string;
    translation?: string;
    citation: string;
    language?: string;
  };
  column: 1 | 2 | 3;
  order: number;
  featured: boolean;
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
