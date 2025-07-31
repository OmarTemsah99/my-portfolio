"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { resolveThemeMode } from "./navbarUtils";

const ModeToggleButton = () => {
  const { mode, setMode } = useColorScheme();

  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const resolvedMode = resolveThemeMode(mode);
  const isDark = resolvedMode === "dark";

  return (
    <Tooltip
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      placement="bottom">
      <IconButton
        onClick={toggleColorMode}
        sx={{
          padding: "8px",
          borderRadius: "8px",
          transition: "all 0.3s ease",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: isDark
              ? "rgba(255, 193, 7, 0.1)"
              : "rgba(25, 118, 210, 0.1)",
            transform: "rotate(180deg)",
          },
        }}
        className={isDark ? "text-amber-300" : "text-primary"}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ModeToggleButton;
