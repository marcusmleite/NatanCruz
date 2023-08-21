import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          border: 0,
          textDecoration: "none",
        },
        ":root": {
          fontSize: "62.5%" /* 1rem = 10px */,
          fontFamily: "'Roboto', sans-serif",
        },
        body: {
          fontSize: "1.6rem",
          backgroundColor: "#F0F0F5",
        },
      },
    },
  },

  palette: {
    mode: "light",

    primary: {
      main: "#5E80F6",
      light: "#4863F7",
      dark: "#3249CB",
    },

    secondary: {
      main: "#49BCE3",
      light: "#49bce3c5",
      dark: "#49bce3da",
      contrastText: "#F0F0F5",
    },

    warning: {
      main: "#F5FF41",
      light: "#f6ff4d",
      dark: "#c2cc00",
      contrastText: "#121212",
    },

    success: {
      main: "#4BCB41",
      dark: "#3CA332",
      contrastText: "#F0F0F5",
    },

    error: {
      light: "#f87171",
      main: "#dc2626",
      dark: "#991b1b",
      contrastText: "#F0F0F5",
    },

    grey: {
      50: "#F0F0F5",
      100: "#c2c2c2",
      200: "#64748b",
      300: "#4b5563",
      400: "#3a3a3a",
    },
  },

  typography: {
    fontFamily: "Roboto",

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,

    fontSize: "1.6rem",

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 400,
    },

    button: {
      textTransform: "none",
      fontSize: "1.6rem",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1536,
      xl: 1872,
    },
  },
});
