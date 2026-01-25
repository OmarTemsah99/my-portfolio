"use client";

import { Box, Fade } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import ShuffleText from "../text-animations/ShuffleText";

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { mode } = useColorScheme();
  const [resolvedMode, setResolvedMode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setIsVisible(true);
    if (mode === "system") {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setResolvedMode(systemDark ? "dark" : "light");
    } else {
      setResolvedMode(mode || "dark");
    }
  }, [mode]);

  const isDark = resolvedMode === "dark";

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isDark
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}>
      {/* Animated Background Gradients */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
          animation: "pulse 4s ease-in-out infinite",
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: i % 2 === 0 ? "6px" : "4px",
            height: i % 2 === 0 ? "6px" : "4px",
            background:
              i % 3 === 0
                ? "linear-gradient(45deg, #8b5cf6, #06b6d4)"
                : i % 3 === 1
                  ? "linear-gradient(45deg, #ec4899, #8b5cf6)"
                  : "linear-gradient(45deg, #06b6d4, #10b981)",
            borderRadius: "50%",
            animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
            top: `${15 + ((i * 11) % 70)}%`,
            left: `${8 + ((i * 13) % 85)}%`,
            opacity: 0.7,
            boxShadow: "0 0 10px currentColor",
          }}
        />
      ))}

      <Fade in={isVisible} timeout={800}>
        <Box
          sx={{
            textAlign: "center",
            zIndex: 2,
            px: 4,
          }}>
          {/* Shuffle Text Animation */}
          <Box
            sx={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4, #ec4899)",
              backgroundSize: "200% 200%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 3s ease-in-out infinite",
              mb: 3,
            }}>
            <ShuffleText
              text="Loading..."
              speed={40}
              shuffleIterations={4}
              style={{
                background: "inherit",
                backgroundClip: "inherit",
                WebkitBackgroundClip: "inherit",
                WebkitTextFillColor: "inherit",
              }}
              className="text-4xl"
            />
          </Box>

          {/* Animated Progress Bar */}
          <Box
            sx={{
              width: { xs: "300px", sm: "400px", md: "800px" },
              height: "6px",
              background: isDark
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
              borderRadius: "2px",
              overflow: "hidden",
              mx: "auto",
            }}>
            <Box
              sx={{
                height: "100%",
                width: "40%",
                background:
                  "linear-gradient(90deg, #8b5cf6, #06b6d4, #ec4899, #8b5cf6)",
                backgroundSize: "300% 100%",
                borderRadius: "2px",
                animation: "progressSlide 1.5s ease-in-out infinite",
              }}
            />
          </Box>
        </Box>
      </Fade>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-25px) rotate(180deg) scale(1.1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.02);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes progressSlide {
          0% {
            transform: translateX(-100%);
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            transform: translateX(350%);
            background-position: 0% 50%;
          }
        }
      `}</style>
    </Box>
  );
};

export default PageLoader;
