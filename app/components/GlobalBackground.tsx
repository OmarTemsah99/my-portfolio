"use client";
import { Box } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

const AnimatedGrid = ({ isDark }: { isDark: boolean }) => (
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

const FloatingParticles = ({ isDark }: { isDark: boolean }) => {
  const particles = Array.from({ length: 50 }, (_, i) => (
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
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ));

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

const GlobalBackground = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";

  return (
    <>
      <AnimatedGrid isDark={isDark} />
      <FloatingParticles isDark={isDark} />
    </>
  );
};

export default GlobalBackground;
