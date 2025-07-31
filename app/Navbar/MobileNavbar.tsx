"use client";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo.webp";
import ModeToggleButton from "./ModeToggleButton";
import { useColorScheme } from "@mui/material/styles";

interface MobileNavbarProps {
  pages: string[];
}

const getPageIcon = (page: string): React.ReactElement => {
  const iconMap: Record<string, React.ReactElement> = {
    home: <HomeIcon />,
    about: <PersonIcon />,
    skills: <CodeIcon />,
    projects: <WorkIcon />,
    contact: <ContactMailIcon />,
  };
  return iconMap[page] || <HomeIcon />;
};

const MobileNavbar = ({ pages }: MobileNavbarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode } = useColorScheme();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        background:
          mode === "dark"
            ? "linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)"
            : "linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)",
        backdropFilter: "blur(20px)",
        backgroundColor:
          mode === "dark"
            ? "rgba(18, 18, 18, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
      }}
      role="presentation">
      {/* Drawer Header */}
      <Box
        className="flex justify-between items-center p-6"
        sx={{
          borderBottom: `1px solid ${
            mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
          }`,
        }}>
        <Box className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain rounded-full ring-2 ring-primary/20"
          />
          <Box>
            <Typography variant="h6" className="font-bold text-primary">
              Portfolio
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color:
                  mode === "dark"
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(0, 0, 0, 0.6)",
              }}
              className="text-xs">
              Navigation Menu
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(244, 67, 54, 0.1)",
              transform: "rotate(90deg)",
            },
            transition: "all 0.3s ease",
          }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List className="px-4 pt-4">
        {pages.map((page, index) => (
          <Fade in={drawerOpen} timeout={300 + index * 100} key={page}>
            <ListItem disablePadding className="mb-2">
              <ListItemButton
                onClick={toggleDrawer(false)}
                sx={{
                  borderRadius: "12px",
                  padding: "12px 16px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(25, 118, 210, 0.08)",
                    transform: "translateX(8px)",
                    boxShadow: "0 4px 12px rgba(25, 118, 210, 0.15)",
                  },
                }}>
                <Box className="flex items-center gap-3 w-full">
                  <Box className="text-primary opacity-70">
                    {getPageIcon(page)}
                  </Box>
                  <Link
                    href={page === "home" ? "/" : `/${page}`}
                    className="flex-1">
                    <ListItemText
                      primary={page.charAt(0).toUpperCase() + page.slice(1)}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        sx: {
                          color:
                            mode === "dark"
                              ? "rgba(255, 255, 255, 0.9)"
                              : "rgba(0, 0, 0, 0.8)",
                        },
                      }}
                    />
                  </Link>
                </Box>
              </ListItemButton>
            </ListItem>
          </Fade>
        ))}
      </List>

      <Divider
        sx={{
          margin: "24px 16px",
          opacity: 0.3,
          borderColor:
            mode === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
        }}
      />

      {/* Mode Toggle in Drawer */}
      <Box className="px-6 pb-6">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px",
            borderRadius: "12px",
            background:
              mode === "dark"
                ? "linear-gradient(135deg, rgba(25, 118, 210, 0.15) 0%, rgba(156, 39, 176, 0.15) 100%)"
                : "linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)",
            border: `1px solid ${
              mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)"
            }`,
          }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color:
                mode === "dark"
                  ? "rgba(255, 255, 255, 0.8)"
                  : "rgba(0, 0, 0, 0.7)",
            }}>
            Theme
          </Typography>
          <ModeToggleButton />
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        className="min-h-16 justify-center shadow-lg">
        <Toolbar className="flex justify-between items-center px-4">
          {/* Logo and Text Section */}
          <Box className="flex items-center gap-3">
            <Box className="relative">
              <Image
                src={logo}
                alt="Logo"
                className="h-10 w-10 object-contain rounded-full"
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="div"
                className="font-bold text-lg bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Omar.T.Temsah
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.75rem",
                  marginTop: "-4px",
                  display: { xs: "none", sm: "block" },
                  color:
                    mode === "dark"
                      ? "rgba(255, 255, 255, 0.6)"
                      : "rgba(0, 0, 0, 0.6)",
                }}>
                Developer
              </Typography>
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              backgroundColor: "rgba(25, 118, 210, 0.1)",
              borderRadius: "12px",
              padding: "10px",
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.2)",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
            className="text-primary">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            background:
              mode === "dark"
                ? "rgba(18, 18, 18, 0.95)"
                : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          },
        }}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default MobileNavbar;
