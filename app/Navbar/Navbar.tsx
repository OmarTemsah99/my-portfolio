"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import logo from "../../public/logo3.webp";
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
            className="font-bold text-lg">
            Omar.T.Temsah
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box className="flex gap-2">
          {pages.map((page) => (
            <Button key={page}>
              <Link href={page === "home" ? "/" : `/${page}`}>{page}</Link>
            </Button>
          ))}
          <Button onClick={toggleColorMode}>
            Toggle to {mode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
