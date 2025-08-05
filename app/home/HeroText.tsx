import { Box, Slide } from "@mui/material";
import { ReactNode } from "react";

interface HeroTextProps {
  isVisible: boolean;
  children: ReactNode;
}

export const HeroText = ({ isVisible, children }: HeroTextProps) => (
  <Slide direction="up" in={isVisible} timeout={1500}>
    <Box sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}>{children}</Box>
  </Slide>
);
