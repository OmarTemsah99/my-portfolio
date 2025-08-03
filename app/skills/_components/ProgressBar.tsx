import { LinearProgress, Typography, Box } from "@mui/material";

interface ProgressBarProps {
  value: number;
  color: string;
  gradient: string;
  label: string;
}

export const ProgressBar = ({
  value,
  color,
  gradient,
  label,
}: ProgressBarProps) => (
  <Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 1,
      }}>
      <Typography
        variant="body1"
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          fontWeight: 500,
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}>
        {label}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: color,
          fontWeight: 600,
          fontSize: "0.85rem",
        }}>
        {value}%
      </Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 6,
        borderRadius: 3,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        "& .MuiLinearProgress-bar": {
          borderRadius: 3,
          background: gradient,
          boxShadow: `0 0 10px ${color}60`,
        },
      }}
    />
  </Box>
);
