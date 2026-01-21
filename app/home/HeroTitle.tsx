import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface HeroTitleProps {
  isDark: boolean;
  children: ReactNode;
}

export const HeroTitle = ({ isDark, children }: HeroTitleProps) => (
  <Typography
    variant="h1"
    sx={{
      color: "#006FC6",
      fontWeight: 800,
      fontSize: {
        xs: "2.5rem",
        sm: "4rem",
        md: "5rem",
        lg: "6rem",
      },
      lineHeight: 1.1,
      mb: 3,
      textShadow: isDark ? "0 0 30px rgba(0, 111, 198, 0.3)" : "none",
    }}>
    {children}
    <Box
      component="span"
      sx={{
        animation: "blink 1s infinite",
        color: "#006FC6",
      }}>
      |
    </Box>
  </Typography>
);
