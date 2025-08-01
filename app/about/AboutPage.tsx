"use client";

import { Box, Container, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import CallToActionSection from "./_components/CallToActionSection";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import StatsSection from "./_components/StatsSection";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { mode } = useColorScheme();

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  const isDark = mounted ? mode === "dark" : false;

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
    <>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 12, md: 16 },
          px: { xs: 2, sm: 4 },
        }}>
        <HeroSection isVisible={isVisible} />
        <StatsSection isDark={isDark} />
        <ServicesSection isVisible={isVisible} isDark={isDark} />
        <CallToActionSection isVisible={isVisible} isDark={isDark} />
      </Container>
    </>
  );
};

export default AboutPage;
