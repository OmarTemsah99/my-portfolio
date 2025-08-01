"use client";

import BoltIcon from "@mui/icons-material/Bolt";
import CodeIcon from "@mui/icons-material/Code";
import DevicesIcon from "@mui/icons-material/Devices";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import WebIcon from "@mui/icons-material/Web";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Fade,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Data for the services section.
 * This is kept outside the component to avoid re-creation on every render.
 */
const services = [
  {
    icon: <WebIcon sx={{ fontSize: "2.5rem" }} />,
    title: "Web Development",
    description:
      "Building fast, responsive websites and full-stack apps that don't crash when you press F5.",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    delay: 200,
  },
  {
    icon: <DevicesIcon sx={{ fontSize: "2.5rem" }} />,
    title: "Embedded Systems",
    description:
      "Writing code that talks to hardware (and listens back). From PCB design to firmware to blinking LEDs like a boss.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    delay: 400,
  },
  {
    icon: <ViewInArIcon sx={{ fontSize: "2.5rem" }} />,
    title: "Product 3D Design",
    description:
      "Turning ideas into 3D magic. Prototyping products with detailed models that look great and actually make sense.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    delay: 600,
  },
];

/**
 * Data for the stats section.
 * This is kept outside the component to avoid re-creation on every render.
 */
const statsRows = [
  // First row (animates right to left)
  [
    { number: "3+", label: "Years of Full Stack Wizardry" },
    { number: "404", label: "Bugs Avoided (Just Kidding)" },
    { number: "1337", label: "Lines of Code (That I'm Proud Of)" },
    { number: "∞", label: "Tabs Open While Debugging" },
  ],
  // Second row (animates left to right)
  [
    { number: "42", label: "Meaning of Life, Universe & My Commit Count" },
    { number: "0", label: "Days Without Googling 'CSS center div'" },
    { number: "1", label: "Break I Was Gonna Take Before Fixing That Bug" },
    { number: "7+", label: "Programming Languages Argued With" },
  ],
];

/**
 * Hero Section Component
 * Handles the main header and introductory text.
 */
const HeroSection = ({ isVisible }: { isVisible: boolean }) => (
  <Fade in={isVisible} timeout={1000}>
    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
      <Typography
        variant="h2"
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
            sm: "3.5rem",
            md: "4.5rem",
          },
          lineHeight: 1.1,
          mb: 3,
        }}>
        About<span style={{ color: "#8b5cf6" }}>.Me</span>
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          fontWeight: 600,
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
          mb: 2,
        }}>
        👨‍💻 Full Stack Developer | Code Whisperer | Bug Tamer 🐛🔥
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          lineHeight: 1.7,
          maxWidth: "800px",
          mx: "auto",
          mb: 4,
        }}>
        I&apos;m a Full Stack Engineer with 3+ years of experience building
        delightful, scalable web apps—front to back and everything in between. I
        specialize in React, Next.js, TypeScript, Node.js, and occasionally
        bribe MongoDB with coffee to keep it cooperative. ☕
        <br />
        <br />
        Once upon a time, I dabbled in the mystical arts of Embedded Systems,
        C/C++, and IoT—so I still know how to make LEDs blink in Morse code when
        JavaScript fails. ✨📟
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: { xs: "0.95rem", sm: "1rem" },
          fontStyle: "italic",
          maxWidth: "600px",
          mx: "auto",
        }}>
        These days, I&apos;m all about clean code, sleek UIs that don&apos;t
        make users cry, and APIs that actually respond (and don&apos;t ghost you
        👻). Always learning, always building, occasionally googling &quot;how
        to center a div&quot; just for nostalgia. Let&apos;s build cool stuff
        and break things (responsibly). 🚀
      </Typography>
    </Box>
  </Fade>
);

/**
 * Individual Stat Card Component.
 * @param {object} props - The props for the component.
 * @param {string} props.number - The number or text to display.
 * @param {string} props.label - The description of the stat.
 * @param {boolean} props.isDark - Flag for dark mode.
 */
const StatCard = ({
  number,
  label,
  isDark,
}: {
  number: string;
  label: string;
  isDark: boolean;
}) => (
  <Card
    sx={{
      background: isDark
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: `1px solid ${
        isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
      }`,
      borderRadius: "16px",
      textAlign: "center",
      height: "100%",
    }}>
    <CardContent sx={{ py: 3, px: 2 }}>
      <Typography
        variant="h3"
        sx={{
          color: "#7c3aed",
          fontWeight: 800,
          fontSize: { xs: "1.5rem", sm: "1.8rem" },
          mb: 1,
          fontFamily: "monospace",
        }}>
        {number}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          fontWeight: 500,
          fontSize: { xs: "0.75rem", sm: "0.85rem" },
          lineHeight: 1.3,
          minHeight: { xs: "auto", sm: "3em" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {label}
      </Typography>
    </CardContent>
  </Card>
);

/**
 * Stats Section Component
 * Handles the continuously sliding stat cards.
 * @param {object} props - The props for the component.
 * @param {boolean} props.isDark - Flag for dark mode.
 */
const StatsSection = ({ isDark }: { isDark: boolean }) => (
  <Box sx={{ mb: { xs: 6, md: 8 }, overflow: "hidden" }}>
    {statsRows.map((row, rowIndex) => (
      <Box
        key={rowIndex}
        sx={{
          mb: 3,
          overflow: "hidden",
          width: "100%",
        }}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            animation:
              rowIndex === 0
                ? "slideRightToLeft 20s linear infinite"
                : "slideLeftToRight 25s linear infinite",
            width: "max-content",
          }}>
          {/* Duplicate the row twice for seamless loop */}
          {[...row, ...row].map((stat, index) => (
            <Box
              key={index}
              sx={{
                minWidth: { xs: "160px", sm: "200px", md: "250px" },
                flexShrink: 0,
              }}>
              <StatCard
                number={stat.number}
                label={stat.label}
                isDark={isDark}
              />
            </Box>
          ))}
        </Box>
      </Box>
    ))}
  </Box>
);

/**
 * Individual Service Card Component.
 * @param {object} props - The props for the component.
 * @param {React.ReactNode} props.icon - The icon for the service.
 * @param {string} props.title - The title of the service.
 * @param {string} props.description - The description of the service.
 * @param {string} props.color - The primary color for the card.
 * @param {string} props.gradient - The gradient for the card's accent.
 * @param {number} props.delay - The animation delay in milliseconds.
 * @param {boolean} props.isVisible - Flag to control the fade animation.
 * @param {boolean} props.isDark - Flag for dark mode.
 */
const ServiceCard = ({
  icon,
  title,
  description,
  color,
  gradient,
  delay,
  isVisible,
  isDark,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  delay: number;
  isVisible: boolean;
  isDark: boolean;
}) => (
  <Slide direction="up" in={isVisible} timeout={1000 + delay}>
    <Card
      sx={{
        height: "100%",
        background: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
        }`,
        borderRadius: "20px",
        transition: "all 0.4s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: `0 25px 50px ${color}40`,
          "&::before": {
            opacity: 1,
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: gradient,
          opacity: 0,
          transition: "opacity 0.4s ease",
        },
      }}>
      <CardContent sx={{ p: 4, textAlign: "center" }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            background: gradient,
            borderRadius: "20px",
            mb: 3,
            color: "white",
            boxShadow: `0 10px 30px ${color}40`,
          }}>
          {icon}
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 600,
            fontSize: { xs: "1.3rem", sm: "1.5rem" },
            mb: 2,
          }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.6,
            fontSize: { xs: "0.95rem", sm: "1rem" },
          }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Slide>
);

/**
 * Services Section Component.
 * @param {object} props - The props for the component.
 * @param {boolean} props.isVisible - Flag to control the fade animation.
 * @param {boolean} props.isDark - Flag for dark mode.
 */
const ServicesSection = ({
  isVisible,
  isDark,
}: {
  isVisible: boolean;
  isDark: boolean;
}) => (
  <Fade in={isVisible} timeout={1500}>
    <Box sx={{ mb: { xs: 6, md: 8 } }}>
      <Typography
        variant="h3"
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          fontWeight: 700,
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          textAlign: "center",
          mb: 4,
        }}>
        What I Can Offer You
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <ServiceCard {...service} isVisible={isVisible} isDark={isDark} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Fade>
);

/**
 * Call to Action Section Component.
 * @param {object} props - The props for the component.
 * @param {boolean} props.isVisible - Flag to control the fade animation.
 * @param {boolean} props.isDark - Flag for dark mode.
 */
const CallToActionSection = ({
  isVisible,
  isDark,
}: {
  isVisible: boolean;
  isDark: boolean;
}) => (
  <Fade in={isVisible} timeout={2000}>
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 6, md: 8 },
        px: 4,
        background: isDark
          ? "rgba(139, 92, 246, 0.1)"
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: "24px",
        border: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
        }`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))",
          zIndex: -1,
        },
      }}>
      <PsychologyIcon
        sx={{
          fontSize: "4rem",
          color: "#7c3aed",
          mb: 2,
          animation: "float 3s ease-in-out infinite",
        }}
      />
      <Typography
        variant="h4"
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          fontWeight: 700,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          mb: 2,
        }}>
        Got an Idea? Let&apos;s Build It Together.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: { xs: "1rem", sm: "1.1rem" },
          lineHeight: 1.6,
          maxWidth: "600px",
          mx: "auto",
          mb: 4,
        }}>
        Whether you&apos;re dreaming up a shiny new web app, a clever IoT
        gadget, or a 3D prototype that wows — I&apos;m here to help bring it to
        life (with code, not just caffeine ☕). Let&apos;s team up and make
        something awesome.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          mb: 4,
        }}>
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          size="large"
          startIcon={<RocketLaunchIcon />}
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
            },
          }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            Lets Work Together
            <BoltIcon sx={{ fontSize: "1.2rem" }} />
          </Box>
        </Button>
        <Button
          component={Link}
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
            borderRadius: "50px",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "rgba(255, 255, 255, 0.5)",
              transform: "translateY(-3px)",
            },
          }}>
          View My Work
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <IconButton
          href="https://tinyurl.com/O-T-T-Linkedin"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#0077b5",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(0, 119, 181, 0.3)",
            },
          }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://github.com/OmarTemsah99"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#333",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(51, 51, 51, 0.3)",
            },
          }}>
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="mailto:omartemsah99@gmail.com"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#ea4335",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(234, 67, 53, 0.3)",
            },
          }}>
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  </Fade>
);

/**
 * Main AboutPage Component
 * This component now acts as a container, orchestrating the sub-components.
 */
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
      {/* Add CSS keyframes for continuous sliding */}
      <style jsx global>{`
        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slideLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
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
