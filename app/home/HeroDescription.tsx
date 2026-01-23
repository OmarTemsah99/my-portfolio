import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface HeroDescriptionProps {
  children: ReactNode;
  isDark: boolean;
}

export const HeroDescription = ({ children, isDark }: HeroDescriptionProps) => (
  <Typography
    variant="body1"
    sx={{
      color: isDark ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.75)",
      fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
      lineHeight: 1.7,
      mb: 4,
    }}>
    {children}
  </Typography>
);
