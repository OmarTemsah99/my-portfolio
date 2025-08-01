import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import Link from "next/link";
import LogoSection from "./LogoSection";
import ModeToggleButton from "./ModeToggleButton";
import { getNavbarStyles, navbarClasses } from "./navbarStyles";
import { getPageUrl } from "./navbarUtils";

interface DesktopNavbarProps {
  pages: string[];
}

const DesktopNavbar = ({ pages }: DesktopNavbarProps) => {
  const { mode } = useColorScheme();
  const styles = getNavbarStyles(mode);

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={styles.appBar}
      className={navbarClasses.appBarContainer}>
      <Toolbar className={navbarClasses.toolbar}>
        <LogoSection mode={mode} />

        {/* Navigation Links */}
        <Box className={navbarClasses.navContainer}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={styles.navButton}
              className={navbarClasses.navButton}>
              <Link href={getPageUrl(page)} className={navbarClasses.navLink}>
                {page}
              </Link>
              <Box className={navbarClasses.navButtonOverlay} />
            </Button>
          ))}
          <Box className={navbarClasses.modeToggleWrapper}>
            <ModeToggleButton />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavbar;
