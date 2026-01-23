"use client";
import { Box, Fade, Typography } from "@mui/material";

const HeroSection = ({ isVisible }: { isVisible: boolean }) => (
  <Fade in={isVisible} timeout={1000}>
    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          fontSize: {
            xs: "2.5rem",
            sm: "3.5rem",
            md: "4.5rem",
          },
          lineHeight: 1.1,
          mb: 3,
        }}
        className="text-primary">
        About<span className="text-primary">.Me</span>
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
          mb: 2,
          letterSpacing: "0.5px",
        }}>
        Full Stack Engineer | Systems Architect | IoT Specialist
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          lineHeight: 1.8,
          maxWidth: "850px",
          mx: "auto",
          mb: 4,
          fontWeight: 500,
        }}>
        I am a results-driven Full Stack Engineer with over 3 years of
        experience specializing in architecting and implementing scalable,
        high-performance web applications. My expertise spans the entire
        development lifecycle, from intuitive front-end interfaces using React
        and Next.js to robust, efficient back-end systems powered by Node.js and
        TypeScript.
        <br />
        <br />
        My technical foundation began in Embedded Systems and IoT, where I
        developed a deep understanding of low-level optimization and hardware
        integration using C and C++. This unique background enables me to
        approach software engineering with a meticulous focus on efficiency and
        reliability.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.95rem", sm: "1rem" },
          fontStyle: "italic",
          maxWidth: "700px",
          mx: "auto",
          lineHeight: 1.6,
          fontWeight: 300,
        }}>
        Dedicated to writing clean, maintainable code and building seamless user
        experiences. I thrive in challenging environments that require
        innovative problem-solving and a commitment to engineering excellence.
      </Typography>
    </Box>
  </Fade>
);

export default HeroSection;
