import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#35483B',
      dark: '#26372D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#795548',
    },
    background: {
      default: '#F7F3EB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#252923',
      secondary: '#77756E',
    },
    divider: '#E5DCCF',
    error: {
      main: '#B85F46',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontFamily: 'Georgia, serif',
    },
    h2: {
      fontFamily: 'Georgia, serif',
    },
    h3: {
      fontFamily: 'Georgia, serif',
    },
  },
});