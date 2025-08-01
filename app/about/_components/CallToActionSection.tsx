"use client";
import BoltIcon from "@mui/icons-material/Bolt";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Button, Fade, IconButton, Typography } from "@mui/material";
import Link from "next/link";

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

export default CallToActionSection;
