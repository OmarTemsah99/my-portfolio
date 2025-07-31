"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useState } from "react";
import DrawerContent from "./DrawerContent";
import LogoSection from "./LogoSection";
import { getNavbarStyles, navbarClasses } from "./navbarStyles";

interface MobileNavbarProps {
  pages: string[];
}

const MobileNavbar = ({ pages }: MobileNavbarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode } = useColorScheme();
  const styles = getNavbarStyles(mode);

  const handleDrawerToggle = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={styles.appBar}
        className={navbarClasses.appBarContainer}>
        <Toolbar className={navbarClasses.mobileToolbar}>
          <LogoSection isMobile mode={mode} />

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle(true)}
            sx={styles.mobileMenuButton}
            className="text-primary">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle(false)}
        sx={styles.drawer}>
        <DrawerContent
          pages={pages}
          mode={mode}
          drawerOpen={drawerOpen}
          onClose={handleDrawerToggle(false)}
        />
      </Drawer>
    </>
  );
};

export default MobileNavbar;
