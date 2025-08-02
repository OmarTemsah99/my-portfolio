"use client";

import ApiIcon from "@mui/icons-material/Api";
import BoltIcon from "@mui/icons-material/Bolt";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudIcon from "@mui/icons-material/Cloud";
import GroupIcon from "@mui/icons-material/Group";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import LanguageIcon from "@mui/icons-material/Language";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import {
  Box,
  Card,
  CardContent,
  Container,
  Fade,
  Grid,
  LinearProgress,
  Slide,
  Typography,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

const SkillsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { mode } = useColorScheme();

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  const isDark = mounted ? mode === "dark" : false;

  const skillCategories = [
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
        { name: "JWT Auth", level: 85 },
        { name: "Multer", level: 80 },
        { name: "Node mailer", level: 80 },
        { name: "OAuth", level: 75 },
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

  const interpersonalSkills = [
    { name: "Problem-Solving", icon: <PsychologyIcon />, color: "#8b5cf6" },
    { name: "Team Collaboration", icon: <GroupIcon />, color: "#06b6d4" },
    { name: "Adaptability", icon: <BoltIcon />, color: "#10b981" },
    {
      name: "Effective Communication",
      icon: <IntegrationInstructionsIcon />,
      color: "#f59e0b",
    },
  ];

  const funFacts = [
    { number: "8+", label: "Programming Languages Mastered", color: "#8b5cf6" },
    {
      number: "25+",
      label: "Frontend & Backend Technologies",
      color: "#06b6d4",
    },
    { number: "5+", label: "Database Systems Conquered", color: "#10b981" },
    {
      number: "∞",
      label: "Lines of Code That Actually Work",
      color: "#f59e0b",
    },
  ];

  if (!mounted) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: "relative",
        zIndex: 2,
        py: { xs: 12, md: 16 },
        px: { xs: 2, sm: 4 },
      }}>
      {/* Header Section */}
      <Fade in={isVisible} timeout={1000}>
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              background: "linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
              },
              lineHeight: 1.1,
              mb: 3,
            }}>
            My<span style={{ color: "#8b5cf6" }}>.</span>Skills
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 600,
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              mb: 2,
            }}>
            🛠️ Technical Arsenal & Professional Superpowers ⚡
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              lineHeight: 1.7,
              maxWidth: "700px",
              mx: "auto",
            }}>
            From crafting pixel-perfect UIs to architecting robust backends,
            here&apos;s my toolkit for turning coffee into code and bugs into
            features! 🚀☕
          </Typography>
        </Box>
      </Fade>

      {/* Fun Facts Section */}
      <Slide direction="up" in={isVisible} timeout={1200}>
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Grid container spacing={3} justifyContent="center">
            {funFacts.map((fact, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <Slide
                  direction="up"
                  in={isVisible}
                  timeout={1500 + index * 200}>
                  <Card
                    sx={{
                      background: isDark
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(20px)",
                      border: `1px solid ${
                        isDark
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(255, 255, 255, 0.2)"
                      }`,
                      borderRadius: "16px",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 20px 40px ${fact.color}40`,
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: fact.color,
                      },
                    }}>
                    <CardContent sx={{ py: 3 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: fact.color,
                          fontWeight: 800,
                          fontSize: { xs: "1.6rem", sm: "2rem" },
                          mb: 1,
                          textShadow: `0 0 20px ${fact.color}40`,
                        }}>
                        {fact.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          fontWeight: 500,
                          fontSize: { xs: "0.8rem", sm: "0.85rem" },
                          lineHeight: 1.3,
                        }}>
                        {fact.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Slide>

      {/* Technical Skills Section */}
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
            💻 Technical Skills
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, categoryIndex) => (
              <Grid size={{ xs: 12, md: 6 }} key={categoryIndex}>
                <Slide
                  direction={categoryIndex % 2 === 0 ? "right" : "left"}
                  in={isVisible}
                  timeout={1000 + category.delay}>
                  <Card
                    sx={{
                      height: "100%",
                      background: isDark
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(20px)",
                      border: `1px solid ${
                        isDark
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(255, 255, 255, 0.2)"
                      }`,
                      borderRadius: "20px",
                      transition: "all 0.4s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: `0 25px 50px ${category.color}40`,
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: category.gradient,
                      },
                    }}>
                    <CardContent sx={{ p: 4 }}>
                      {/* Category Header */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 3,
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 50,
                            height: 50,
                            background: category.gradient,
                            borderRadius: "12px",
                            color: "white",
                            boxShadow: `0 8px 20px ${category.color}40`,
                          }}>
                          {category.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "rgba(255, 255, 255, 0.9)",
                            fontWeight: 600,
                            fontSize: { xs: "1.2rem", sm: "1.4rem" },
                          }}>
                          {category.title}
                        </Typography>
                      </Box>

                      {/* Skills List */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 3,
                        }}>
                        {category.skills.map((skill, skillIndex) => (
                          <Box key={skillIndex}>
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
                                {skill.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: category.color,
                                  fontWeight: 600,
                                  fontSize: "0.85rem",
                                }}>
                                {skill.level}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                "& .MuiLinearProgress-bar": {
                                  borderRadius: 3,
                                  background: category.gradient,
                                  boxShadow: `0 0 10px ${category.color}60`,
                                },
                              }}
                            />
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      {/* Interpersonal Skills Section */}
      <Fade in={isVisible} timeout={2000}>
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 6, md: 8 },
            px: 4,
            background: isDark
              ? "rgba(139, 92, 246, 0.1)"
              : "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
            }`,
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))",
              zIndex: -1,
            },
          }}>
          <Typography
            variant="h3"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              mb: 4,
            }}>
            🤝 Interpersonal Skills
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {interpersonalSkills.map((skill, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <Slide
                  direction="up"
                  in={isVisible}
                  timeout={2200 + index * 200}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      p: 3,
                      borderRadius: "16px",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        background: "rgba(255, 255, 255, 0.1)",
                        boxShadow: `0 15px 30px ${skill.color}30`,
                      },
                    }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        background: skill.color,
                        borderRadius: "50%",
                        color: "white",
                        boxShadow: `0 8px 20px ${skill.color}40`,
                      }}>
                      {skill.icon}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontWeight: 500,
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                        textAlign: "center",
                        lineHeight: 1.3,
                      }}>
                      {skill.name}
                    </Typography>
                  </Box>
                </Slide>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "0.95rem", sm: "1rem" },
              lineHeight: 1.6,
              maxWidth: "600px",
              mx: "auto",
              mt: 4,
              fontStyle: "italic",
            }}>
            &quot;The best code is written by humans, for humans. These soft
            skills help me bridge the gap between complex technology and
            real-world solutions.&quot; 🌟
          </Typography>
        </Box>
      </Fade>
    </Container>
  );
};

export default SkillsPage;
