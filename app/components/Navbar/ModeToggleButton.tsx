"use client";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

const ModeToggleButton = () => {
  const { mode, setMode } = useColorScheme();

  const handleToggle = () => {
    // Toggle between light and dark mode
    setMode(mode === "light" ? "dark" : "light");
  };

  const isDarkMode = mode === "dark";

  return (
    <Tooltip
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      placement="bottom">
      <IconButton
        onClick={handleToggle}
        aria-label="Toggle theme"
        sx={{
          padding: "8px",
          borderRadius: "8px",
          transition: "all 0.3s ease",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "rgba(25, 118, 210, 0.1)",
            transform: "rotate(15deg)",
          },
        }}
        className={isDarkMode ? "text-primary" : "text-amber-300"}>
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ModeToggleButton;
