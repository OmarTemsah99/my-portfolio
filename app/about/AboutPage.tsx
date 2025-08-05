"use client";

import { Container } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import CustomLoader from "../components/CustomLoader";
import { useMounted } from "../hooks/useMounted";
import {
  CallToActionSection,
  HeroSection,
  ServicesSection,
  StatsSection,
} from "./_components";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mounted = useMounted();
  const { mode } = useColorScheme();

  useEffect(() => {
    if (mounted) setIsVisible(true);
  }, [mounted]);

  const isDark = mounted ? mode === "dark" : false;

  if (!mounted) {
    return <CustomLoader variant="about" message="Loading about page" />;
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
