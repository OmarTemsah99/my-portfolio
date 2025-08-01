"use client";
import DevicesIcon from "@mui/icons-material/Devices";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import WebIcon from "@mui/icons-material/Web";
import { Box, Fade, Grid, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <WebIcon sx={{ fontSize: "2.5rem" }} />,
    title: "Web Development",
    description:
      "Building fast, responsive websites and full-stack apps that don't crash when you press F5.",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    delay: 200,
  },
  {
    icon: <DevicesIcon sx={{ fontSize: "2.5rem" }} />,
    title: "Embedded Systems",
    description:
      "Writing code that talks to hardware (and listens back). From PCB design to firmware to blinking LEDs like a boss.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    delay: 400,
  },
  {
    icon: <ViewInArIcon sx={{ fontSize: "2.5rem" }} />,
    title: "Product 3D Design",
    description:
      "Turning ideas into 3D magic. Prototyping products with detailed models that look great and actually make sense.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    delay: 600,
  },
];

const ServicesSection = ({
  isVisible,
  isDark,
}: {
  isVisible: boolean;
  isDark: boolean;
}) => (
  <Fade in={isVisible} timeout={1500}>
    <Box sx={{ mb: { xs: 6, md: 8 } }}>
      <Typography
        variant="h3"
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          fontWeight: 700,
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          textAlign: "center",
          mb: 4,
        }}>
        What I Can Offer You
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <ServiceCard {...service} isVisible={isVisible} isDark={isDark} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Fade>
);

export default ServicesSection;
