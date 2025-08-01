import { Box, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/logo.webp";
import { navbarClasses } from "./navbarStyles";
import { getTextColor, ThemeMode } from "./navbarUtils";

interface LogoSectionProps {
  isMobile?: boolean;
  mode: ThemeMode;
  showSubtitle?: boolean;
}

const LogoSection = ({
  isMobile = false,
  mode,
  showSubtitle = true,
}: LogoSectionProps) => {
  const textColors = getTextColor(mode);

  return (
    <Box className={navbarClasses.logoContainer}>
      <Box className={navbarClasses.logoWrapper}>
        <Image
          src={logo}
          alt="Logo"
          className={
            isMobile ? navbarClasses.logoImageMobile : navbarClasses.logoImage
          }
        />
      </Box>
      <Box>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          component="div"
          className={
            isMobile ? navbarClasses.logoTitleMobile : navbarClasses.logoTitle
          }>
          Omar.T.Temsah
        </Typography>
        {showSubtitle && (
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.75rem",
              marginTop: "-4px",
              display: isMobile ? { xs: "none", sm: "block" } : "block",
              color: textColors.secondary,
            }}
            className={navbarClasses.logoSubtitle}>
            Full Stack Developer
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default LogoSection;
