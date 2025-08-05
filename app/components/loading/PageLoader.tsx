"use client";

import { Box, CircularProgress, Typography, Fade } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  title?: string;
  subtitle?: string;
  variant?: "home" | "about" | "skills" | "projects" | "contact";
  initialMode?: "light" | "dark";
}

const PageLoader = ({
  title = "Loading",
  subtitle = "Please wait...",
  variant = "home",
  initialMode = "dark",
}: PageLoaderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { mode } = useColorScheme();
  const [resolvedMode, setResolvedMode] = useState<"light" | "dark">(
    initialMode
  );

  useEffect(() => {
    setIsVisible(true);
    if (mode === "system") {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setResolvedMode(systemDark ? "dark" : "light");
    } else {
      setResolvedMode(mode || "light");
    }
  }, [mode]);

  const getVariantConfig = () => {
    switch (variant) {
      case "home":
        return {
          title: "Omar Temsah",
          subtitle: "Full Stack Developer & IoT Wizard",
          emoji: "☕✨",
          gradient: "linear-gradient(45deg, #8b5cf6, #06b6d4)",
        };
      case "about":
        return {
          title: "About Me",
          subtitle: "Full Stack Developer | Code Whisperer | Bug Tamer",
          emoji: "🧑‍💻🔥",
          gradient: "linear-gradient(45deg, #f59e0b, #ef4444)",
        };
      case "skills":
        return {
          title: "My Skills",
          subtitle: "Technical Arsenal & Professional Superpowers",
          emoji: "🛠️⚡",
          gradient: "linear-gradient(45deg, #10b981, #3b82f6)",
        };
      case "projects":
        return {
          title: "My Projects",
          subtitle: "Digital Experiences & Technical Solutions",
          emoji: "🚀💻",
          gradient: "linear-gradient(45deg, #8b5cf6, #ec4899)",
        };
      case "contact":
        return {
          title: "Get In Touch",
          subtitle: "Let's build something amazing together",
          emoji: "📧🤝",
          gradient: "linear-gradient(45deg, #06b6d4, #8b5cf6)",
        };
      default:
        return {
          title,
          subtitle,
          emoji: "⚡",
          gradient: "linear-gradient(45deg, #8b5cf6, #06b6d4)",
        };
    }
  };

  const config = getVariantConfig();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: resolvedMode
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
          : "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}>
      {/* Animated Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
          animation: "pulse 4s ease-in-out infinite",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: config.gradient,
            borderRadius: "50%",
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
            top: `${20 + i * 10}%`,
            left: `${10 + i * 15}%`,
            opacity: 0.6,
          }}
        />
      ))}

      <Fade in={isVisible} timeout={1000}>
        <Box
          sx={{
            textAlign: "center",
            zIndex: 2,
            px: 4,
          }}>
          {/* Custom Loading Spinner */}
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              mb: 4,
            }}>
            <CircularProgress
              size={80}
              thickness={3}
              sx={{
                color: "transparent",
                "& .MuiCircularProgress-circle": {
                  stroke: `url(#gradient-${variant})`,
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
                fontSize: "2rem",
                animation: "bounce 1.5s ease-in-out infinite",
              }}>
              {config.emoji.split("").map((emoji, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    animation: `bounce 1.5s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`,
                  }}>
                  {emoji}
                </span>
              ))}
            </Box>

            {/* SVG Gradient Definition */}
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id={`gradient-${variant}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </Box>

          <Typography
            variant="h3"
            sx={{
              background: config.gradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
              animation: "fadeInUp 1s ease-out",
            }}>
            {config.title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontWeight: 400,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
              mb: 3,
              animation: "fadeInUp 1s ease-out 0.2s both",
            }}>
            {config.subtitle}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              animation: "fadeInUp 1s ease-out 0.4s both",
            }}>
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: config.gradient,
                  animation: `pulse 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </Box>
        </Box>
      </Fade>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </Box>
  );
};

export default PageLoader;
