// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#793558', // purple
    },
    secondary: {
      main: '#E6E6E6', // coral
    },
    background: {
      default: '#E6E6E6', // platinum
    },
    text: {
        primary: '#39393A', // black
        secondary: '#39393A' // teal
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial',
    h1: {},
  },
});

export default theme;
