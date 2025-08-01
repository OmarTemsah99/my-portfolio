"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const pages = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <MobileNavbar pages={pages} />
      ) : (
        <DesktopNavbar pages={pages} />
      )}
    </>
  );
};

export default Navbar;
