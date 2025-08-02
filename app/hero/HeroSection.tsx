import { Box, Fade } from "@mui/material";
import { ReactNode } from "react";

interface HeroSectionProps {
  isVisible: boolean;
  children: ReactNode;
}

export const HeroSection = ({ isVisible, children }: HeroSectionProps) => (
  <Fade in={isVisible} timeout={1000}>
    <Box sx={{ mb: 4 }}>{children}</Box>
  </Fade>
);
