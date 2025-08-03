import ApiIcon from "@mui/icons-material/Api";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudIcon from "@mui/icons-material/Cloud";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";

export const skillCategories = [
  {
    title: "Languages",
    icon: <LanguageIcon sx={{ fontSize: "2rem" }} />,
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ],
    delay: 200,
  },
  {
    title: "Frontend",
    icon: <WebIcon sx={{ fontSize: "2rem" }} />,
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React.js", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Chakra UI", level: 85 },
      { name: "Material UI", level: 85 },
      { name: "React Router", level: 85 },
      { name: "Zustand", level: 80 },
      { name: "Recharts", level: 75 },
    ],
    delay: 400,
  },
  {
    title: "Backend",
    icon: <ApiIcon sx={{ fontSize: "2rem" }} />,
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    skills: [
      { name: "Nest.js", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "Spring Boot", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "Next-Auth", level: 85 },
      { name: "Multer", level: 80 },
      { name: "Node mailer", level: 80 },
      { name: "Redux", level: 75 },
    ],
    delay: 600,
  },
  {
    title: "Database",
    icon: <StorageIcon sx={{ fontSize: "2rem" }} />,
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "Mongoose", level: 85 },
      { name: "MongoDB Atlas", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Redis", level: 70 },
    ],
    delay: 800,
  },
  {
    title: "DevOps & Tools",
    icon: <CloudIcon sx={{ fontSize: "2rem" }} />,
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444, #dc2626)",
    skills: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 95 },
      { name: "CI/CD (GitHub Actions)", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Docker", level: 70 },
      { name: "VSCode", level: 95 },
      { name: "Postman", level: 90 },
    ],
    delay: 1000,
  },
  {
    title: "Testing & Practices",
    icon: <BugReportIcon sx={{ fontSize: "2rem" }} />,
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    skills: [
      { name: "Jest", level: 75 },
      { name: "Test-Driven Development", level: 70 },
      { name: "Agile & Scrum", level: 85 },
      { name: "Responsive Design", level: 95 },
    ],
    delay: 1200,
  },
];
