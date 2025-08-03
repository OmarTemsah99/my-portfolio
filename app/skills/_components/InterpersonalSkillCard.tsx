import { Box, Typography, Slide } from "@mui/material";
import { ReactNode } from "react";

interface InterpersonalSkillCardProps {
  name: string;
  icon: ReactNode;
  color: string;
  isVisible: boolean;
  delay?: number;
}

export const InterpersonalSkillCard = ({
  name,
  icon,
  color,
  isVisible,
  delay = 0,
}: InterpersonalSkillCardProps) => (
  <Slide direction="up" in={isVisible} timeout={2200 + delay}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 3,
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: `0 15px 30px ${color}30`,
        },
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          height: 60,
          background: color,
          borderRadius: "50%",
          color: "white",
          boxShadow: `0 8px 20px ${color}40`,
        }}>
        {icon}
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          fontWeight: 500,
          fontSize: { xs: "0.85rem", sm: "0.9rem" },
          textAlign: "center",
          lineHeight: 1.3,
        }}>
        {name}
      </Typography>
    </Box>
  </Slide>
);
