import { Box } from "@mui/material";
import StatCard from "./StatCard";

const statsRows = [
  [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "10k+", label: "Commits Pushed" },
    { number: "100%", label: "Code Coverage (On Core)" },
  ],
  [
    { number: "24/7", label: "Server Uptime (DevOps)" },
    { number: "0.5s", label: "Avg Page Load Time" },
    { number: "15+", label: "Key Technologies" },
    { number: "12", label: "Cloud Services Used" },
  ],
];

const StatsSection = ({ isDark }: { isDark: boolean }) => (
  <Box sx={{ mb: { xs: 6, md: 8 }, overflow: "hidden" }}>
    {statsRows.map((row, rowIndex) => (
      <Box
        key={rowIndex}
        sx={{
          mb: 3,
          overflow: "hidden",
          width: "100%",
        }}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            animation: `
              ${rowIndex === 0 ? "slideRightToLeft" : "slideLeftToRight"} 
              ${rowIndex === 0 ? "20s" : "25s"} 
              linear 
              infinite
            `,
            width: "max-content",
          }}>
          {[...row, ...row].map((stat, index) => (
            <Box
              key={index}
              sx={{
                minWidth: { xs: "160px", sm: "200px", md: "250px" },
                flexShrink: 0,
              }}>
              <StatCard
                number={stat.number}
                label={stat.label}
                isDark={isDark}
              />
            </Box>
          ))}
        </Box>
      </Box>
    ))}
  </Box>
);

export default StatsSection;
