import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
} from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import type { Book } from '../../types/book.types';

interface ProductCardProps {
  book: Book;
  onViewDetails?: (book: Book) => void;
  onAddToCart?: (book: Book) => void;
}

export const ProductCard = ({
  book,
  onViewDetails,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 280,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        transition: 'box-shadow 0.2s, transform 0.2s',
        '&:hover': {
          boxShadow: 5,
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={book.mainImage || '/images/book-placeholder.png'}
        alt={book.name}
        sx={{
          height: 240,
          objectFit: 'contain',
          p: 2,
          bgcolor: 'grey.50',
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        {book.year && (
          <Chip
            label={book.year}
            size="small"
            variant="outlined"
            sx={{ mb: 1 }}
          />
        )}

        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: '1rem',
            fontWeight: 600,
            mb: 0.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {book.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {book.authors.join(', ')}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          {new Intl.NumberFormat('uk-UA', {
            style: 'currency',
            currency: 'UAH',
            maximumFractionDigits: 2,
          }).format(book.price)}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => onViewDetails?.(book)}
          sx={{ flex: 1 }}
        >
          Details
        </Button>

        <Button
          variant="contained"
          size="small"
          onClick={() => onAddToCart?.(book)}
          aria-label={`Add ${book.name} to cart`}
        >
          <ShoppingCartOutlined fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
}
