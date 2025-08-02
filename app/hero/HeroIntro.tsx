import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface HeroIntroProps {
  children: ReactNode;
}

export const HeroIntro = ({ children }: HeroIntroProps) => (
  <Typography
    variant="h4"
    sx={{
      color: "rgba(255, 255, 255, 0.9)",
      fontWeight: 300,
      mb: 2,
      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
    }}>
    {children}
  </Typography>
);
