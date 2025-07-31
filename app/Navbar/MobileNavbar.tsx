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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo.webp";
import ModeToggleButton from "./ModeToggleButton";

const pages = ["home", "about", "skills", "projects", "contact"];

const MobileNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      {/* Drawer Header */}
      <Box className="flex justify-between items-center p-4 border-b">
        <Typography variant="h6" className="font-bold text-primary">
          Menu
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton>
              <Link
                href={page === "home" ? "/" : `/${page}`}
                className="w-full">
                <ListItemText
                  primary={page.charAt(0).toUpperCase() + page.slice(1)}
                  className="text-primary"
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* Mode Toggle in Drawer */}
      <Box className="p-4">
        <ModeToggleButton />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        className="h-10 justify-center">
        <Toolbar className="flex justify-between items-center">
          {/* Logo and Text Section */}
          <Box className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Logo"
              className="h-10 w-10 object-contain rounded-full"
            />
            <Typography
              variant="h6"
              component="div"
              className="font-bold text-lg text-primary">
              Omar.T.Temsah
            </Typography>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className="text-primary">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default MobileNavbar;
