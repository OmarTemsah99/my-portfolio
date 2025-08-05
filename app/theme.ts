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
        // Add your light theme colors here
      },
    },
    dark: {
      palette: {
        mode: "dark",
        // Add your dark theme colors here
      },
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
