import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";

// Icon mapping utility
export const getPageIcon = (page: string): React.ReactElement => {
  const iconMap: Record<string, React.ReactElement> = {
    home: <HomeIcon />,
    about: <PersonIcon />,
    skills: <CodeIcon />,
    projects: <WorkIcon />,
    contact: <ContactMailIcon />,
  };
  return iconMap[page] || <HomeIcon />;
};

// URL generation utility
export const getPageUrl = (page: string): string => {
  return page === "home" ? "/" : `/${page}`;
};

// Capitalize utility
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Theme mode type
export type ThemeMode = "light" | "dark" | "system" | undefined;

// Helper to resolve system mode to actual theme
export const resolveThemeMode = (mode: ThemeMode): "light" | "dark" => {
  if (mode === "system" || mode === undefined) {
    // Default to light theme when system or undefined
    // In a real app, you might want to detect system preference
    return "light";
  }
  return mode;
};

// Color utilities for theme-based styling
export const getTextColor = (mode: ThemeMode) => {
  const resolvedMode = resolveThemeMode(mode);
  return {
    primary:
      resolvedMode === "dark"
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(0, 0, 0, 0.8)",
    secondary:
      resolvedMode === "dark"
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(0, 0, 0, 0.6)",
    tertiary:
      resolvedMode === "dark"
        ? "rgba(255, 255, 255, 0.8)"
        : "rgba(0, 0, 0, 0.7)",
  };
};

export const getBorderColor = (mode: ThemeMode) => {
  const resolvedMode = resolveThemeMode(mode);
  return resolvedMode === "dark"
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.1)";
};

export const getDividerColor = (mode: ThemeMode) => {
  const resolvedMode = resolveThemeMode(mode);
  return resolvedMode === "dark"
    ? "rgba(255, 255, 255, 0.2)"
    : "rgba(0, 0, 0, 0.2)";
};
