import { Card, CardContent, Box, Typography, Slide } from "@mui/material";
import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  color: string;
  gradient: string;
  isDark: boolean;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  isVisible: boolean;
  children: ReactNode;
}

export const SkillCard = ({
  title,
  icon,
  color,
  gradient,
  isDark,
  direction = "up",
  delay = 0,
  isVisible,
  children,
}: SkillCardProps) => (
  <Slide direction={direction} in={isVisible} timeout={1000 + delay}>
    <Card
      sx={{
        height: "100%",
        background: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
        }`,
        borderRadius: "20px",
        transition: "all 0.4s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: `0 25px 50px ${color}40`,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: gradient,
        },
      }}>
      <CardContent sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              background: gradient,
              borderRadius: "12px",
              color: "white",
              boxShadow: `0 8px 20px ${color}40`,
            }}>
            {icon}
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 600,
              fontSize: { xs: "1.2rem", sm: "1.4rem" },
            }}>
            {title}
          </Typography>
        </Box>
        {children}
      </CardContent>
    </Card>
  </Slide>
);
