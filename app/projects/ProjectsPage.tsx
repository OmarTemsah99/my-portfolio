"use client";

import { Box, Container, Fade, Grid, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import CustomLoader from "../components/CustomLoader";
import { useMounted } from "../hooks/useMounted";
import { ProjectCard, ProjectStats, SectionHeader } from "./_components";
import { projectStats } from "./constants/projectStats";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string | null;
  tags: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
}

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const mounted = useMounted();
  const { mode } = useColorScheme();

  useEffect(() => {
    if (mounted) setIsVisible(true);
  }, [mounted]);

  const isDark = mounted ? mode === "dark" : false;

  if (!mounted) {
    return <CustomLoader />;
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
        title="My.Projects"
        subtitle="Digital Experiences & Technical Solutions"
        isVisible={isVisible}
        emoji="🚀💻"
      />

      {/* Project Stats Section */}
      <Fade in={isVisible} timeout={1200}>
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Grid container spacing={3} justifyContent="center">
            {projectStats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <ProjectStats
                  number={stat.number}
                  label={stat.label}
                  color={stat.color}
                  isDark={isDark}
                  isVisible={isVisible}
                  delay={index * 200}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      {/* Projects Grid Section */}
      <Fade in={isVisible} timeout={2000}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              textAlign: "center",
              mb: 4,
            }}>
            💼 Featured Projects
          </Typography>

          {projects.length === 0 ? (
            <Box
              sx={{
                textAlign: "center",
                py: 8,
                background: isDark
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}>
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  mb: 2,
                }}>
                🔍 No Projects Found
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.5)",
                  fontStyle: "italic",
                }}>
                No projects available at the moment
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid key={project.id} size={{ xs: 12, md: 6, lg: 4 }}>
                  <ProjectCard
                    project={project}
                    isDark={isDark}
                    isVisible={isVisible}
                    delay={index * 200}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Fade>
    </Container>
  );
};

export default ProjectsPage;
