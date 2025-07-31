"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorScheme } from "@mui/material/styles";
import logo from "../../public/logo1.webp";
import Image from "next/image";
import Link from "next/link";

const pages = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const { mode, setMode } = useColorScheme();

  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
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
            className="h-8 w-8 object-contain rounded-full"
          />
          <Typography
            variant="h6"
            component="div"
            className="font-bold text-lg text-primary">
            Omar.T.Temsah
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box className="flex gap-2">
          {pages.map((page) => (
            <Button key={page} className="text-primary">
              <Link href={page === "home" ? "/" : `/${page}`}>{page}</Link>
            </Button>
          ))}
          <Button onClick={toggleColorMode}>
            {mode === "light" ? (
              <DarkModeIcon className="text-primary" />
            ) : (
              <LightModeIcon className="text-amber-300" />
            )}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
