import { Card, CardContent, Typography } from "@mui/material";

interface StatCardProps {
  number: string;
  label: string;
  isDark: boolean;
}

const StatCard = ({ number, label, isDark }: StatCardProps) => (
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
      height: "100%",
    }}>
    <CardContent sx={{ py: 3, px: 2 }}>
      <Typography
        variant="h3"
        sx={{
          color: "#7c3aed",
          fontWeight: 800,
          fontSize: { xs: "1.5rem", sm: "1.8rem" },
          mb: 1,
          fontFamily: "monospace",
        }}>
        {number}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          fontWeight: 500,
          fontSize: { xs: "0.75rem", sm: "0.85rem" },
          lineHeight: 1.3,
          minHeight: { xs: "auto", sm: "3em" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {label}
      </Typography>
    </CardContent>
  </Card>
);

export default StatCard;
