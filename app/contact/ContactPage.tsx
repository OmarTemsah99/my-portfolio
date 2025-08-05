"use client";

import { Container } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import CustomLoader from "../components/CustomLoader";
import { useMounted } from "../hooks/useMounted";
import ContactFormSection from "./_components/ContactFormSection";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mounted = useMounted();
  const { mode } = useColorScheme();

  useEffect(() => {
    if (mounted) setIsVisible(true);
  }, [mounted]);

  const isDark = mounted ? mode === "dark" : false;

  if (!mounted) {
    return <CustomLoader />;
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: "relative",
        zIndex: 2,
        py: { xs: 12, md: 16 },
        px: { xs: 2, sm: 4 },
      }}>
      <ContactFormSection isVisible={isVisible} isDark={isDark} />
    </Container>
  );
};

export default ContactPage;
