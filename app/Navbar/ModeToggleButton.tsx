"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

const ModeToggleButton = () => {
  const { mode, setMode } = useColorScheme();

  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={toggleColorMode}>
      {mode === "light" ? (
        <DarkModeIcon className="text-primary" />
      ) : (
        <LightModeIcon className="text-amber-300" />
      )}
    </Button>
  );
};

export default ModeToggleButton;
