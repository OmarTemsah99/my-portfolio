import { Card, CardContent, Typography, Slide } from "@mui/material";

interface FactCardProps {
  number: string;
  label: string;
  color: string;
  isDark: boolean;
  isVisible: boolean;
  delay?: number;
}

export const FactCard = ({
  number,
  label,
  color,
  isDark,
  isVisible,
  delay = 0,
}: FactCardProps) => (
  <Slide direction="up" in={isVisible} timeout={1500 + delay}>
    <Card
      sx={{
        background: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
        }`,
        borderRadius: "16px",
        textAlign: "center",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `0 20px 40px ${color}40`,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: color,
        },
      }}>
      <CardContent sx={{ py: 3 }}>
        <Typography
          variant="h3"
          sx={{
            color: color,
            fontWeight: 800,
            fontSize: { xs: "1.6rem", sm: "2rem" },
            mb: 1,
            textShadow: `0 0 20px ${color}40`,
          }}>
          {number}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: 500,
            fontSize: { xs: "0.8rem", sm: "0.85rem" },
            lineHeight: 1.3,
          }}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  </Slide>
);
