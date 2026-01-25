"use client";

import { Box, Container, useMediaQuery } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import CustomLoader from "../components/CustomLoader";
import { GithubContributions } from "../components/GithubContributions";
import { useMounted } from "../hooks/useMounted";
import {
  CallToActionSection,
  HeroSection,
  ServicesSection,
  StatsSection,
} from "./_components";
import theme from "../theme";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mounted = useMounted();
  const { mode } = useColorScheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: "center" }}>
          <GithubContributions />
        </Box>

        <ServicesSection isVisible={isVisible} isDark={isDark} />
        <CallToActionSection
          isVisible={isVisible}
          isDark={isDark}
          isMobile={isMobile}
        />
      </Container>
    </>
  );
};

export default AboutPage;
