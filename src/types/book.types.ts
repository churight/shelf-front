export interface Book {
  _id: string;
  isbn: number;
  name: string;
  alternativeNames: string[];
  authors: string[];
  description: string;
  year: number;
  language: string;
  genres: string[];
  tags: string[];
  mainImage: string;
  images: string[];
  price: number;
  createdAt: string;
  updatedAt: string;
}
