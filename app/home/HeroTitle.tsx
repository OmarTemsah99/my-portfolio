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
      background: "linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981)",
      backgroundSize: "200% 200%",
      animation: "gradientShift 3s ease infinite",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontWeight: 800,
      fontSize: {
        xs: "2.5rem",
        sm: "4rem",
        md: "5rem",
        lg: "6rem",
      },
      lineHeight: 1.1,
      mb: 3,
      textShadow: isDark ? "0 0 30px rgba(139, 92, 246, 0.3)" : "none",
    }}>
    {children}
    <Box
      component="span"
      sx={{
        animation: "blink 1s infinite",
        color: "#8b5cf6",
      }}>
      |
    </Box>
  </Typography>
);
