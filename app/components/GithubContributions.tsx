"use client";

import { GitHubCalendar } from "react-github-calendar";
import {
  Box,
  Typography,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

export const GithubContributions = () => {
  const { mode } = useColorScheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress
          size={24}
          sx={{ color: "rgba(255, 255, 255, 0.5)" }}
        />
      </Box>
    );
  }

  const isDark = mode === "dark";

  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "hidden",
        width: "100%",
        p: { xs: 2, md: 4 },
        textAlign: "left",
      }}>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}>
        <GitHubIcon sx={{ fontSize: "1.2rem", opacity: 0.8 }} />
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.9)",
          }}>
          Open Source Contributions
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", color: "white" }}>
        <GitHubCalendar
          username="OmarTemsah99"
          colorScheme={isDark ? "dark" : "light"}
          fontSize={12}
          blockSize={isMobile ? 10 : 13}
          blockMargin={4}
          theme={{
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          }}
        />
      </Box>
    </Box>
  );
};
