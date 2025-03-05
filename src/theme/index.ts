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
};

// Create the theme using `themeOptions`
const theme = createTheme(themeOptions);

export default theme;
