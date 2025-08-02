import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface HeroDescriptionProps {
  children: ReactNode;
}

export const HeroDescription = ({ children }: HeroDescriptionProps) => (
  <Typography
    variant="body1"
    sx={{
      color: "rgba(255, 255, 255, 0.75)",
      fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
      lineHeight: 1.7,
      mb: 4,
    }}>
    {children}
  </Typography>
);
