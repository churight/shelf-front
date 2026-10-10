import { useEffect, useState } from 'react';
import type { Book } from '../../types/book.types';
import { getBooks } from '../../api/api';

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    }

    void fetchBooks();
  }, []);

  return { books, loading, error };
}