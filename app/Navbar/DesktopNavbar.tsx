import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";
import ModeToggleButton from "./ModeToggleButton";

const pages = ["home", "about", "skills", "projects", "contact"];

const DesktopNavbar = () => {
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
            className="h-10 w-10 object-contain rounded-full"
          />
          <Typography
            variant="h6"
            component="div"
            className="font-bold text-lg text-primary">
            Omar.T.Temsah Portfolio
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box className="flex gap-2">
          {pages.map((page) => (
            <Button key={page} className="text-primary">
              <Link href={page === "home" ? "/" : `/${page}`}>{page}</Link>
            </Button>
          ))}
          <ModeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavbar;
