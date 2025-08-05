import { Box, Fade } from "@mui/material";
import { ReactNode } from "react";

interface HeroButtonsProps {
  isVisible: boolean;
  children: ReactNode;
}

export const HeroButtons = ({ isVisible, children }: HeroButtonsProps) => (
  <Fade in={isVisible} timeout={2000}>
    <Box
      sx={{
        display: "flex",
        gap: 3,
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
      }}>
      {children}
    </Box>
  </Fade>
);
