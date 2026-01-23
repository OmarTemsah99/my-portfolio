"use client";

import { Box, CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <GitHubCalendar
          username="OmarTemsah99"
          colorScheme={isDark ? "dark" : "light"}
          fontSize={12}
          blockSize={isMobile ? 10 : 13}
          blockMargin={4}
          theme={{
            dark: ["#161b22", "#002a4d", "#004C8B", "#006FC6", "#2594FF"],
            light: ["#ebedf0", "#CCE2F4", "#2594FF", "#006FC6", "#004C8B"],
          }}
        />
      </Box>
    </Box>
  );
};
