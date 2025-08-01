import { Box, Card, CardContent, Slide, Typography } from "@mui/material";
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  delay: number;
  isVisible: boolean;
  isDark: boolean;
}

const ServiceCard = ({
  icon,
  title,
  description,
  color,
  gradient,
  delay,
  isVisible,
  isDark,
}: ServiceCardProps) => (
  <Slide direction="up" in={isVisible} timeout={1000 + delay}>
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
          transform: "translateY(-10px)",
          boxShadow: `0 25px 50px ${color}40`,
          "&::before": {
            opacity: 1,
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: gradient,
          opacity: 0,
          transition: "opacity 0.4s ease",
        },
      }}>
      <CardContent sx={{ p: 4, textAlign: "center" }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            background: gradient,
            borderRadius: "20px",
            mb: 3,
            color: "white",
            boxShadow: `0 10px 30px ${color}40`,
          }}>
          {icon}
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 600,
            fontSize: { xs: "1.3rem", sm: "1.5rem" },
            mb: 2,
          }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.6,
            fontSize: { xs: "0.95rem", sm: "1rem" },
          }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Slide>
);

export default ServiceCard;
