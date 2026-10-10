import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Skeleton,
  Box,
} from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image';
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
    book ? (<Card
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
      {book.mainImage ? (
        <CardMedia
          component="img"
          image={book.mainImage}
          alt={book.name}
          sx={{
            height: 240,
            objectFit: 'contain',
            p: 2,
            bgcolor: 'grey.50',
          }}
        />
      ) : (
        <Box
          role="img"
          aria-label={`No cover available for ${book.name}`}
          sx={{
            height: 240,
            p: 2,
            bgcolor: 'grey.50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ImageIcon sx={{ fontSize: 64, color: 'text.secondary' }} />
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1 }}>
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
    </Card>)
    : ( <Skeleton variant="rectangular" width={220} height={420} />)
  );
}
