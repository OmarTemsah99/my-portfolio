"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useColorScheme } from "@mui/material/styles";

const FloatingParticles = ({ isDark }: { isDark: boolean }) => {
  // Generate stable particle positions using a seeded random approach
  const particles = Array.from({ length: 50 }, (_, i) => {
    // Use a simple hash to create stable positions for each particle
    const seed = i * 12345;
    const left = (((seed * 16807) % 2147483647) / 2147483647) * 100;
    const top = (((seed * 48271) % 2147483647) / 2147483647) * 100;

    return (
      <Box
        key={i}
        sx={{
          position: "absolute",
          width: "2px",
          height: "2px",
          backgroundColor: isDark
            ? "rgba(139, 92, 246, 0.6)"
            : "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          animation: `float${i % 3} ${3 + (i % 4)}s infinite ease-in-out`,
          left: `${left}%`,
          top: `${top}%`,
          animationDelay: `${(i % 10) * 0.2}s`,
        }}
      />
    );
  });

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}>
      {particles}
    </Box>
  );
};

const AnimatedGrid = ({ isDark }: { isDark: boolean }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: isDark ? 0.1 : 0.05,
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        animation: "gridMove 20s linear infinite",
        zIndex: 0,
      }}
    />
  );
};

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { mode } = useColorScheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Default to light theme during SSR to match the server
  const isDark = isMounted ? mode === "dark" : false;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        background: isDark
          ? "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)"
          : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
      {/* Only render animations on client side */}
      {isMounted && (
        <>
          <AnimatedGrid isDark={isDark} />
          <FloatingParticles isDark={isDark} />
        </>
      )}

      {/* Content container */}
      <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
};

export default AnimatedBackground;
