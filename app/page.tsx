"use client";

import {
  HeroButton,
  HeroButtons,
  HeroDescription,
  HeroIntro,
  HeroSection,
  HeroSubtitle,
  HeroText,
  HeroTitle,
} from "@/app/home";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Container } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import CustomLoader from "./components/CustomLoader";
import { useMounted } from "./hooks/useMounted";
import { useTypewriterEffect } from "./hooks/useTypewriterEffect";

export default function Home() {
  const mounted = useMounted();
  const { mode } = useColorScheme();
  const currentText = useTypewriterEffect("Omar Temsah", 150);
  const isDark = mounted ? mode === "dark" : false;
  const isVisible = mounted;

  if (!mounted) {
    return (
      <CustomLoader variant="home" message="Initializing developer mode" />
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "calc(100vh - 66px)",
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
            background: "#006FC6",
            color: "white",
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            py: { xs: 1.5, sm: 2 },
            px: { xs: 3, sm: 4 },
            borderRadius: "12px",
            textTransform: "none",
            boxShadow: "0 8px 32px rgba(0, 111, 198, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 12px 40px rgba(0, 111, 198, 0.4)",
              background: "#004C8B",
            },
          }}>
          Get to Know Me
        </HeroButton>

        <HeroButton
          href="/projects"
          variant="outlined"
          size="large"
          startIcon={<CodeIcon />}
          sx={{
            color: "white",
            borderColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            py: { xs: 1.5, sm: 2 },
            px: { xs: 3, sm: 4 },
            borderRadius: "12px",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "rgba(255, 255, 255, 0.5)",
              transform: "translateY(-3px)",
              boxShadow: "0 12px 40px rgba(255, 255, 255, 0.1)",
            },
          }}>
          View My Projects
        </HeroButton>
      </HeroButtons>
    </Container>
  );
}
