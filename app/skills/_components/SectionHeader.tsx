import { Typography, Box, Fade } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  isVisible: boolean;
  emoji?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  isVisible,
  emoji,
}: SectionHeaderProps) => (
  <Fade in={isVisible} timeout={1000}>
    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
      <Typography
        variant="h2"
        sx={{
          color: "#006FC6",
          fontWeight: 800,
          fontSize: {
            xs: "2.5rem",
            sm: "3.5rem",
            md: "4.5rem",
          },
          lineHeight: 1.1,
          mb: 3,
        }}>
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
            mb: 2,
          }}>
          {emoji && `${emoji} `}
          {subtitle}
          {emoji && ` ${emoji}`}
        </Typography>
      )}
    </Box>
  </Fade>
);
