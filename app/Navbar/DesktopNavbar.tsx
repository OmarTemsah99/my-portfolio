import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";
import ModeToggleButton from "./ModeToggleButton";

interface DesktopNavbarProps {
  pages: string[];
}

const DesktopNavbar = ({ pages }: DesktopNavbarProps) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      className="min-h-16 justify-center shadow-lg">
      <Toolbar className="flex justify-between items-center px-6">
        {/* Logo and Text Section */}
        <Box className="flex items-center gap-3">
          <Box className="relative">
            <Image
              src={logo}
              alt="Logo"
              className="h-12 w-12 object-contain rounded-full "
            />
          </Box>
          <Box>
            <Typography
              variant="h5"
              component="div"
              className="font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Omar.T.Temsah
            </Typography>
            <Typography
              variant="caption"
              className="text-xs text-gray-500 -mt-1 block">
              Full Stack Developer
            </Typography>
          </Box>
        </Box>

        {/* Navigation Links */}
        <Box className="flex items-center gap-1">
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                textTransform: "capitalize",
                fontWeight: 500,
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
                },
              }}
              className="text-primary relative group">
              <Link
                href={page === "home" ? "/" : `/${page}`}
                className="relative z-10">
                {page}
              </Link>
              <Box className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          ))}
          <Box className="ml-2 p-1 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <ModeToggleButton />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavbar;
