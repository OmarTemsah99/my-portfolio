"use client";
import { Box, Fade, Typography } from "@mui/material";

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

export default HeroSection;
