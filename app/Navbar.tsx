"use client";

import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const pages = ["Home", "About", "Skills", "Projects", "Contact"];

interface NavbarProps {
  activePage?: string;
  onPageChange?: (page: string) => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

function Navbar({
  activePage = "Home",
  onPageChange,
  darkMode = false,
  onToggleDarkMode,
}: NavbarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
    handleCloseNavMenu();
  };

  const isActivePage = (page: string) => {
    return activePage.toLowerCase() === page.toLowerCase();
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: darkMode
          ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
          : "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo - Left side */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                "&:hover": {
                  color: darkMode ? "#90caf9" : "#bbdefb",
                },
              }}>
              Omar.T.Temsah
            </Typography>
          </Box>

          {/* Mobile Menu */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
                flexGrow: 1,
              }}>
              Omar.T.Temsah
            </Typography>

            {/* Dark Mode Toggle - Mobile */}
            <IconButton
              onClick={onToggleDarkMode}
              color="inherit"
              sx={{ mr: 1 }}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: darkMode ? "#2d2d2d" : "#fff",
                  color: darkMode ? "#fff" : "#000",
                },
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handlePageClick(page)}
                  sx={{
                    backgroundColor: isActivePage(page)
                      ? darkMode
                        ? "rgba(144, 202, 249, 0.2)"
                        : "rgba(25, 118, 210, 0.1)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.04)",
                    },
                  }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: isActivePage(page) ? 600 : 400,
                      color: isActivePage(page)
                        ? darkMode
                          ? "#90caf9"
                          : "#1976d2"
                        : "inherit",
                    }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation - Right side */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  position: "relative",
                  px: 3,
                  py: 1,
                  borderRadius: "8px",
                  fontWeight: isActivePage(page) ? 600 : 400,
                  backgroundColor: isActivePage(page)
                    ? "rgba(255,255,255,0.2)"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-2px)",
                    transition: "all 0.3s ease",
                  },
                  "&::after": isActivePage(page)
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "80%",
                        height: "2px",
                        backgroundColor: darkMode ? "#90caf9" : "#bbdefb",
                        borderRadius: "1px",
                      }
                    : {},
                  transition: "all 0.3s ease",
                }}>
                {page}
              </Button>
            ))}

            {/* Dark Mode Toggle - Desktop */}
            <IconButton
              onClick={onToggleDarkMode}
              color="inherit"
              sx={{
                ml: 2,
                backgroundColor: "rgba(255,255,255,0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                  transform: "scale(1.1)",
                  transition: "all 0.3s ease",
                },
                transition: "all 0.3s ease",
              }}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
