import { Alert, CircularProgress } from '@mui/material';
import { useBooks } from '../hooks/books/useBooks';
import { BookCatalog } from '../components';


export default function Shop() {
  const { books, loading, error } = useBooks();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <BookCatalog
      books={books}
      onViewDetails={(book) => {
        console.log('View book:', book._id);
      }}
      onAddToCart={(book) => {
        console.log('Add to cart:', book._id);
      }}
    />
  );
}