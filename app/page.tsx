"use client";

import BoltIcon from "@mui/icons-material/Bolt";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Button, Container, Fade, Slide, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { mode } = useColorScheme();

  const fullText = "Omar Temsah";

  // Prevent hydration mismatch by waiting for client mount
  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!mounted) return;

    const typeWriter = () => {
      if (textIndex < fullText.length) {
        setCurrentText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }
    };

    const timer = setTimeout(typeWriter, 150);
    return () => clearTimeout(timer);
  }, [textIndex, fullText, mounted]);

  // Determine theme safely
  const isDark = mounted ? mode === "dark" : false;

  // Don't render content until mounted
  if (!mounted) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        px: { xs: 2, sm: 4 },
      }}>
      {/* Welcome Message */}
      <Fade in={isVisible} timeout={1000}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 300,
              mb: 2,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}>
            👋 Hey there! I&apos;m
          </Typography>

          <Typography
            variant="h1"
            sx={{
              background: "linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
              fontSize: {
                xs: "2.5rem",
                sm: "4rem",
                md: "5rem",
                lg: "6rem",
              },
              lineHeight: 1.1,
              mb: 3,
              textShadow: isDark ? "0 0 30px rgba(139, 92, 246, 0.3)" : "none",
            }}>
            {currentText}
            <Box
              component="span"
              sx={{
                animation: "blink 1s infinite",
                color: "#8b5cf6",
              }}>
              |
            </Box>
          </Typography>
        </Box>
      </Fade>

      {/* Intro Text */}
      <Slide direction="up" in={isVisible} timeout={1500}>
        <Box sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255, 255, 255, 0.85)",
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              mb: 3,
            }}>
            🚀 Full Stack Developer & IoT Wizard
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.75)",
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
              lineHeight: 1.7,
              mb: 4,
            }}>
            I turn coffee into code and ideas into reality! ☕✨
            <br />
            From embedded systems that talk to each other (they&apos;re quite
            chatty) to React apps that make users go &quot;Wow!&quot;, I craft
            digital experiences that are both functional and delightfully
            smooth.
            <br />
            <Box component="span" sx={{ fontStyle: "italic", opacity: 0.8 }}>
              Warning: May contain traces of Python, C++, and an unhealthy
              obsession with clean code! 🐍⚡
            </Box>
          </Typography>
        </Box>
      </Slide>

      {/* Action Buttons */}
      <Fade in={isVisible} timeout={2000}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}>
          <Button
            component={Link}
            href="/about"
            variant="contained"
            size="large"
            startIcon={<PersonIcon />}
            sx={{
              background: "linear-gradient(45deg, #8b5cf6, #06b6d4)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              py: { xs: 1.5, sm: 2 },
              px: { xs: 3, sm: 4 },
              borderRadius: "50px",
              textTransform: "none",
              boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 12px 40px rgba(139, 92, 246, 0.4)",
                background: "linear-gradient(45deg, #7c3aed, #0891b2)",
              },
            }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              Get to Know Me
              <BoltIcon sx={{ fontSize: "1.2rem" }} />
            </Box>
          </Button>

          <Button
            component={Link}
            href="/projects"
            variant="outlined"
            size="large"
            startIcon={<RocketLaunchIcon />}
            sx={{
              color: "white",
              borderColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              fontWeight: 600,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              py: { xs: 1.5, sm: 2 },
              px: { xs: 3, sm: 4 },
              borderRadius: "50px",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "rgba(255, 255, 255, 0.5)",
                transform: "translateY(-3px)",
                boxShadow: "0 12px 40px rgba(255, 255, 255, 0.1)",
              },
            }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              View My Projects
              <CodeIcon sx={{ fontSize: "1.2rem" }} />
            </Box>
          </Button>
        </Box>
      </Fade>
    </Container>
  );
}
