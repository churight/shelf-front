import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductCard } from './ProductCard';
import type { Book } from '../../types/book.types';

const meta = {
  title: 'Books/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onViewDetails: { action: 'view details' },
    onAddToCart: { action: 'add to cart' },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleBook: Book = {
  _id: '1',
  name: 'The Odyssey',
  alternativeNames: [],
  authors: ['Homer'],
  year: -700,
  mainImage: 'https://placehold.co/300x400?text=The+Odyssey',
  isbn: 9780140449136,
  description: 'An ancient Greek epic poem.',
  language: 'English',
  genres: ['Epic poetry'],
  tags: [],
  images: [],
  price: 350,
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
};

export const Default: Story = {
  args: {
    book: sampleBook,
  },
};

export const LongTitle: Story = {
  args: {
    book: {
      ...sampleBook,
      _id: '2',
      name: 'The Master and Margarita: A Novel of Good and Evil',
      authors: ['Mikhail Bulgakov'],
    },
  },
};

export const MultipleAuthors: Story = {
  args: {
    book: {
      ...sampleBook,
      _id: '3',
      name: 'Clean Code',
      authors: ['Robert C. Martin', 'Michael Feathers'],
      year: 2008,
      price: 599,
    },
  },
};

export const MissingCover: Story = {
  args: {
    book: {
      ...sampleBook,
      _id: '4',
      name: 'Book Without a Cover',
      mainImage: '',
    },
  },
};

export const LongAuthorList: Story = {
  args: {
    book: {
      ...sampleBook,
      _id: '5',
      authors: [
        'Author One',
        'Author Two',
        'Author Three',
        'Author Four',
      ],
    },
  },
};
