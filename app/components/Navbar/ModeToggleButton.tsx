"use client";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ComputerIcon from "@mui/icons-material/Computer";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useState } from "react";

const ModeToggleButton = () => {
  const { mode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeChange = (newMode: "light" | "dark" | "system") => {
    setMode(newMode);
    handleClose();
  };

  const getCurrentModeIcon = () => {
    if (mode === "system") {
      return <ComputerIcon className="text-blue-500" />;
    }
    return mode === "light" ? <LightModeIcon /> : <DarkModeIcon />;
  };

  return (
    <>
      <Tooltip title="Change theme" placement="bottom">
        <IconButton
          onClick={handleClick}
          sx={{
            padding: "8px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "rgba(25, 118, 210, 0.1)",
            },
          }}
          className={mode === "light" ? "text-amber-300" : "text-primary"}>
          {getCurrentModeIcon()}
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "theme-menu",
        }}>
        <MenuItem
          onClick={() => handleModeChange("system")}
          selected={mode === "system"}>
          <ComputerIcon sx={{ mr: 1 }} className="text-blue-500" /> System
        </MenuItem>
        <MenuItem
          onClick={() => handleModeChange("light")}
          selected={mode === "light"}>
          <LightModeIcon sx={{ mr: 1 }} className="text-amber-300" /> Light
        </MenuItem>
        <MenuItem
          onClick={() => handleModeChange("dark")}
          selected={mode === "dark"}>
          <DarkModeIcon sx={{ mr: 1 }} className="text-primary" /> Dark
        </MenuItem>
      </Menu>
    </>
  );
};

export default ModeToggleButton;
