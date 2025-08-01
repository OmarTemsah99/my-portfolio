import { Box } from "@mui/material";
import StatCard from "./StatCard";

const statsRows = [
  [
    { number: "3+", label: "Years of Full Stack Wizardry" },
    { number: "404", label: "Bugs Avoided (Just Kidding)" },
    { number: "1337", label: "Lines of Code (That I'm Proud Of)" },
    { number: "∞", label: "Tabs Open While Debugging" },
  ],
  [
    { number: "42", label: "Meaning of Life, Universe & My Commit Count" },
    { number: "0", label: "Days Without Googling 'CSS center div'" },
    { number: "1", label: "Break I Was Gonna Take Before Fixing That Bug" },
    { number: "7+", label: "Programming Languages Argued With" },
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
