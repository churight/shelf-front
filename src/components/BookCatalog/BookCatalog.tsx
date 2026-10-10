import { Grid, Typography, Container } from '@mui/material';
import type { Book } from '../../types/book.types';
import ProductCard from '../ProductCard';

interface BookCatalogProps {
  books: Book[];
  onViewDetails: (book: Book) => void;
  onAddToCart: (book: Book) => void;
}

export const BookCatalog = ({
  books,
  onViewDetails,
  onAddToCart,
}: BookCatalogProps) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        Books
      </Typography>

      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid
            key={book._id}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          >
            <ProductCard
              book={book}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}