// Import extendTheme and theme tools from Chakra UI
import { extendTheme } from '@chakra-ui/react';

// Define your custom colors
const colors = {
  brand: {
    50: '#fcfcfc', // lightest
    100: '#3DE583', // custom green
    200: '#141414', // almost black
    300: '#b3b3b3', // light gray
    // You can continue adding shades as needed
  },
};

// Extend the default theme
const theme = extendTheme({
  colors,
});

export default theme;
