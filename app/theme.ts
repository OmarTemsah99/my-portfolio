"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#006FC6",
          light: "#2594FF",
          dark: "#004C8B",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#6C33C1",
          light: "#8D5FE2",
          dark: "#441E7D",
          contrastText: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#006FC6",
          light: "#2594FF",
          dark: "#004C8B",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#6C33C1",
          light: "#8D5FE2",
          dark: "#441E7D",
          contrastText: "#ffffff",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
