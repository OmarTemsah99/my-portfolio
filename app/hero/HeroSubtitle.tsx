import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface HeroSubtitleProps {
  children: ReactNode;
}

export const HeroSubtitle = ({ children }: HeroSubtitleProps) => (
  <Typography
    variant="h5"
    sx={{
      color: "rgba(255, 255, 255, 0.85)",
      fontWeight: 400,
      lineHeight: 1.6,
      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
      mb: 3,
    }}>
    {children}
  </Typography>
);
