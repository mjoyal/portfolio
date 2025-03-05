import { createTheme, ThemeOptions } from "@mui/material/styles";

// Define your custom theme properties
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#E6F187",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#E6F187",
    },
    background: {
      default: "#0A0A0C",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
};

// Create the theme using `themeOptions`
const theme = createTheme(themeOptions);

export default theme;
