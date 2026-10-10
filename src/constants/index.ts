export const API_URL = import.meta.env.API_URL ?? 'http://localhost:3000';

export const ERROR_MESSAGES = {
  FETCH_BOOKS: 'Failed to fetch books',
  FETCH_BOOK: 'Failed to fetch book',
  UNEXPECTED: 'An unexpected error occurred',
} as const;