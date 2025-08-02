"use client";

import BoltIcon from "@mui/icons-material/Bolt";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Container, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useMounted } from "./hooks/useMounted";
import { useTypewriterEffect } from "./hooks/useTypewriterEffect";
import { HeroSection } from "./hero/HeroSection";
import { HeroIntro } from "./hero/HeroIntro";
import { HeroTitle } from "./hero/HeroTitle";
import { HeroText } from "./hero/HeroText";
import { HeroSubtitle } from "./hero/HeroSubtitle";
import { HeroDescription } from "./hero/HeroDescription";
import { HeroButtons } from "./hero/HeroButtons";
import { HeroButton } from "./hero/HeroButton";

export default function Home() {
  const mounted = useMounted();
  const { mode } = useColorScheme();
  const currentText = useTypewriterEffect("Omar Temsah", 150);
  const isDark = mounted ? mode === "dark" : false;
  const isVisible = mounted;

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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        zIndex: 2,
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
      }}>
      <HeroSection isVisible={isVisible}>
        <HeroIntro>Hey there! I&apos;m</HeroIntro>
        <HeroTitle isDark={isDark}>{currentText}</HeroTitle>
      </HeroSection>

      <HeroText isVisible={isVisible}>
        <HeroSubtitle>Full Stack Developer & IoT Wizard</HeroSubtitle>
        <HeroDescription>
          I turn coffee into code and ideas into reality! ☕✨
          <br />
          From embedded systems that talk to each other (they&apos;re quite
          chatty) to React apps that make users go &quot;Wow!&quot;, I craft
          digital experiences that are both functional and delightfully smooth.
          <br />
          <Box component="span" sx={{ fontStyle: "italic", opacity: 0.8 }}>
            Warning: May contain traces of Python, C++, and an unhealthy
            obsession with clean code! 🐍⚡
          </Box>
        </HeroDescription>
      </HeroText>

      <HeroButtons isVisible={isVisible}>
        <HeroButton
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
        </HeroButton>

        <HeroButton
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
        </HeroButton>
      </HeroButtons>
    </Container>
  );
}
