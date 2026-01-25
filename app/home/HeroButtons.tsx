import { Box, Fade } from "@mui/material";
import { ReactNode } from "react";

interface HeroButtonsProps {
  isVisible: boolean;
  children: ReactNode;
  isMobile: boolean;
}

export const HeroButtons = ({
  isVisible,
  children,
  isMobile,
}: HeroButtonsProps) => (
  <Fade in={isVisible} timeout={2000}>
    <Box
      sx={{
        display: "flex",
        gap: 3,
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        width: "100%",
      }}>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
            width: "100%",
            alignItems: "stretch",
          }}>
          {children}
        </Box>
      ) : (
        children
      )}
    </Box>
  </Fade>
);
