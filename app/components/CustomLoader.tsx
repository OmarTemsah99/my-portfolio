"use client";

import { Box, CircularProgress, Typography, Fade } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

interface CustomLoaderProps {
  message?: string;
  size?: number;
  variant?: "home" | "about" | "skills" | "projects" | "contact" | "default";
}

const CustomLoader = ({
  message = "Loading...",
  size = 60,
  variant = "default",
}: CustomLoaderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dots, setDots] = useState("");
  const { mode } = useColorScheme();
  const isDark = mode === "dark";

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getGradientColors = () => {
    switch (variant) {
      case "home":
        return { start: "#8b5cf6", end: "#06b6d4" };
      case "about":
        return { start: "#f59e0b", end: "#ef4444" };
      case "skills":
        return { start: "#10b981", end: "#3b82f6" };
      case "projects":
        return { start: "#8b5cf6", end: "#ec4899" };
      case "contact":
        return { start: "#06b6d4", end: "#8b5cf6" };
      default:
        return { start: "#8b5cf6", end: "#06b6d4" };
    }
  };

  const gradientColors = getGradientColors();

  return (
    <Fade in={isVisible} timeout={500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "200px",
          gap: 3,
          p: 4,
        }}>
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
          }}>
          <CircularProgress
            size={size}
            thickness={3}
            sx={{
              color: "transparent",
              "& .MuiCircularProgress-circle": {
                stroke: `url(#custom-gradient-${variant})`,
                strokeLinecap: "round",
              },
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: size / 4,
              animation: "spin 2s linear infinite",
            }}>
            ⚡
          </Box>

          <svg width="0" height="0">
            <defs>
              <linearGradient
                id={`custom-gradient-${variant}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%">
                <stop offset="0%" stopColor={gradientColors.start} />
                <stop offset="100%" stopColor={gradientColors.end} />
              </linearGradient>
            </defs>
          </svg>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
            fontWeight: 500,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            textAlign: "center",
            minHeight: "24px",
          }}>
          {message}
          {dots}
        </Typography>

        <style jsx global>{`
          @keyframes spin {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `}</style>
      </Box>
    </Fade>
  );
};

export default CustomLoader;
