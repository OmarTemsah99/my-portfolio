// Shared styles for navbar components
import { SxProps, Theme } from "@mui/material/styles";
import { ThemeMode, resolveThemeMode } from "./navbarUtils";

export const getNavbarStyles = (mode: ThemeMode) => {
  const resolvedMode = resolveThemeMode(mode);

  return {
    // App Bar styles
    appBar: {
      backdropFilter: "blur(10px)",
      backgroundColor:
        resolvedMode === "dark"
          ? "rgba(18, 18, 18, 0.8)"
          : "rgba(255, 255, 255, 0.8)",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      border: `1px solid ${
        resolvedMode === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)"
      }`,
    } as SxProps<Theme>,

    // Navigation button styles
    navButton: {
      textTransform: "capitalize",
      fontWeight: 500,
      padding: "8px 16px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(25, 118, 210, 0.1)",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
      },
    } as SxProps<Theme>,

    // Mobile menu button styles
    mobileMenuButton: {
      backgroundColor: "rgba(25, 118, 210, 0.1)",
      borderRadius: "12px",
      padding: "10px",
      "&:hover": {
        backgroundColor: "rgba(25, 118, 210, 0.2)",
        transform: "scale(1.05)",
      },
      transition: "all 0.3s ease",
    } as SxProps<Theme>,

    // Drawer styles
    drawer: {
      "& .MuiDrawer-paper": {
        width: 280,
        background:
          resolvedMode === "dark"
            ? "rgba(18, 18, 18, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
      },
    } as SxProps<Theme>,

    // Drawer content styles
    drawerContent: {
      height: "100%",
      background:
        resolvedMode === "dark"
          ? "linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)"
          : "linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)",
      backdropFilter: "blur(20px)",
      backgroundColor:
        resolvedMode === "dark"
          ? "rgba(18, 18, 18, 0.95)"
          : "rgba(255, 255, 255, 0.95)",
    } as SxProps<Theme>,

    // List item button styles
    listItemButton: {
      borderRadius: "12px",
      padding: "12px 16px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(25, 118, 210, 0.08)",
        transform: "translateX(8px)",
        boxShadow: "0 4px 12px rgba(25, 118, 210, 0.15)",
      },
    } as SxProps<Theme>,

    // Close button styles
    closeButton: {
      "&:hover": {
        backgroundColor: "rgba(244, 67, 54, 0.1)",
        transform: "rotate(90deg)",
      },
      transition: "all 0.3s ease",
    } as SxProps<Theme>,

    // Theme toggle container styles
    themeToggleContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px",
      borderRadius: "12px",
      background:
        resolvedMode === "dark"
          ? "linear-gradient(135deg, rgba(25, 118, 210, 0.15) 0%, rgba(156, 39, 176, 0.15) 100%)"
          : "linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)",
      border: `1px solid ${
        resolvedMode === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)"
      }`,
    } as SxProps<Theme>,
  };
};

// Tailwind classes
export const navbarClasses = {
  // Common classes
  appBarContainer: "min-h-16 justify-center shadow-lg",
  toolbar: "flex justify-between items-center px-6",
  mobileToolbar: "flex justify-between items-center px-4",

  // Logo section
  logoContainer: "flex items-center gap-3",
  logoWrapper: "relative",
  logoImage: "h-12 w-12 object-contain rounded-full",
  logoImageMobile: "h-10 w-10 object-contain rounded-full",
  logoTitle:
    "font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent",
  logoTitleMobile:
    "font-bold text-lg bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent",
  logoSubtitle: "text-xs block -mt-1",

  // Navigation
  navContainer: "flex items-center gap-1",
  navButton: "text-primary relative group",
  navLink: "relative z-10",
  navButtonOverlay:
    "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",

  // Mode toggle
  modeToggleWrapper:
    "ml-2 p-1 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10",

  // Mobile drawer
  drawerHeader: "flex justify-between items-center p-6",
  drawerNavList: "px-4 pt-4",
  drawerListItem: "mb-2",
  drawerItemContent: "flex items-center gap-3 w-full",
  drawerIcon: "text-primary opacity-70",
  drawerLink: "flex-1",
  drawerFooter: "px-6 pb-6",
} as const;
