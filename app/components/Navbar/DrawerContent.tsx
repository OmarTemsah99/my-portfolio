import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Divider,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import ModeToggleButton from "./ModeToggleButton";
import { getNavbarStyles, navbarClasses } from "./navbarStyles";
import {
  capitalize,
  getBorderColor,
  getDividerColor,
  getPageIcon,
  getPageUrl,
  getTextColor,
  ThemeMode,
} from "./navbarUtils";

interface DrawerContentProps {
  pages: string[];
  mode: ThemeMode;
  drawerOpen: boolean;
  onClose: () => void;
}

const DrawerContent = ({
  pages,
  mode,
  drawerOpen,
  onClose,
}: DrawerContentProps) => {
  const styles = getNavbarStyles(mode);
  const textColors = getTextColor(mode);
  const borderColor = getBorderColor(mode);
  const dividerColor = getDividerColor(mode);

  return (
    <Box sx={styles.drawerContent} role="presentation">
      {/* Drawer Header */}
      <Box
        className={navbarClasses.drawerHeader}
        sx={{ borderBottom: `1px solid ${borderColor}` }}>
        <Box className="flex items-center gap-3 flex-1 min-w-0">
          <Image
            src={logo}
            alt="Logo"
            className="h-8 w-8 object-contain rounded-full ring-2 ring-primary/20 flex-shrink-0"
          />
          <Box className="min-w-0 flex-1">
            <Typography variant="h6" className="font-bold text-primary text-sm">
              Portfolio
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: textColors.secondary }}
              className="text-xs">
              Navigation Menu
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={onClose}
          sx={styles.closeButton}
          className="flex-shrink-0">
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List className={navbarClasses.drawerNavList}>
        {pages.map((page, index) => (
          <Fade in={drawerOpen} timeout={300 + index * 100} key={page}>
            <ListItem disablePadding className={navbarClasses.drawerListItem}>
              <ListItemButton onClick={onClose} sx={styles.listItemButton}>
                <Box className={navbarClasses.drawerItemContent}>
                  <Box className={navbarClasses.drawerIcon}>
                    {getPageIcon(page)}
                  </Box>
                  <Link
                    href={getPageUrl(page)}
                    className={navbarClasses.drawerLink}>
                    <ListItemText
                      primary={capitalize(page)}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        sx: { color: textColors.primary },
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
          borderColor: dividerColor,
        }}
      />

      {/* Theme Toggle Section */}
      <Box className={navbarClasses.drawerFooter}>
        <Box sx={styles.themeToggleContainer}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: textColors.tertiary,
            }}>
            Theme
          </Typography>
          <ModeToggleButton />
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerContent;
