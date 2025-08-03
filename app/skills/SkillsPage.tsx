"use client";

import { Box, Container, Fade, Grid, Slide, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useMounted } from "../hooks/useMounted";
import {
  FactCard,
  InterpersonalSkillCard,
  ProgressBar,
  SectionHeader,
  SkillCard,
} from "./_components";
import { funFacts } from "./Constants/funFacts";
import { interpersonalSkills } from "./Constants/interpersonalSkills";
import { skillCategories } from "./Constants/skillCategories";

const SkillsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mounted = useMounted();
  const { mode } = useColorScheme();

  useEffect(() => {
    if (mounted) setIsVisible(true);
  }, [mounted]);

  const isDark = mounted ? mode === "dark" : false;

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
      <SectionHeader
        title="My.Skills"
        subtitle="Technical Arsenal & Professional Superpowers"
        isVisible={isVisible}
        emoji="🛠️⚡"
      />

      {/* Fun Facts Section */}
      <Slide direction="up" in={isVisible} timeout={1200}>
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Grid container spacing={3} justifyContent="center">
            {funFacts.map((fact, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <FactCard
                  number={fact.number}
                  label={fact.label}
                  color={fact.color}
                  isDark={isDark}
                  isVisible={isVisible}
                  delay={index * 200}
                />
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
              <Grid key={categoryIndex} size={{ xs: 12, md: 6 }}>
                <SkillCard
                  title={category.title}
                  icon={category.icon}
                  color={category.color}
                  gradient={category.gradient}
                  isDark={isDark}
                  direction={categoryIndex % 2 === 0 ? "right" : "left"}
                  isVisible={isVisible}
                  delay={category.delay}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                    }}>
                    {category.skills.map((skill, skillIndex) => (
                      <ProgressBar
                        key={skillIndex}
                        value={skill.level}
                        color={category.color}
                        gradient={category.gradient}
                        label={skill.name}
                      />
                    ))}
                  </Box>
                </SkillCard>
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
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <InterpersonalSkillCard
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                  isVisible={isVisible}
                  delay={index * 200}
                />
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
