"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class", // Or 'media' for system preference
  },
  colorSchemes: {
    dark: true,
    light: true,
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
