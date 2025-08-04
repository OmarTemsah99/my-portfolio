"use client";

import { Box, Container, Fade, Grid, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
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
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const mounted = useMounted();
  const { mode } = useColorScheme();

  useEffect(() => {
    if (mounted) setIsVisible(true);
  }, [mounted]);

  const isDark = mounted ? mode === "dark" : false;

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

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

      {/* Filter Tags Section */}
      {allTags.length > 0 && (
        <Fade in={isVisible} timeout={1800}>
          <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: 600,
                mb: 3,
              }}>
              🏷️ Filter by Technology
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}>
              <Box
                onClick={() => setSelectedTag(null)}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: "20px",
                  background: !selectedTag
                    ? "linear-gradient(135deg, #8b5cf6, #06b6d4)"
                    : "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)",
                  },
                }}>
                All Projects
              </Box>
              {allTags.map((tag, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedTag(tag)}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: "20px",
                    background:
                      selectedTag === tag
                        ? "linear-gradient(135deg, #8b5cf6, #06b6d4)"
                        : "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)",
                    },
                  }}>
                  {tag}
                </Box>
              ))}
            </Box>
          </Box>
        </Fade>
      )}

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
            {selectedTag && (
              <Typography
                component="span"
                sx={{
                  display: "block",
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: 400,
                  mt: 1,
                }}>
                Filtered by: {selectedTag}
              </Typography>
            )}
          </Typography>

          {filteredProjects.length === 0 ? (
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
                {selectedTag
                  ? `No projects found with the tag "${selectedTag}"`
                  : "No projects available at the moment"}
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => (
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

      {/* Call to Action Section */}
      <Fade in={isVisible} timeout={3000}>
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 6, md: 8 },
            px: 4,
            mt: { xs: 6, md: 8 },
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
            variant="h4"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 700,
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              mb: 3,
            }}>
            🤝 Let&apos;s Build Something Amazing Together
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "0.95rem", sm: "1rem" },
              lineHeight: 1.6,
              maxWidth: "600px",
              mx: "auto",
              mb: 4,
            }}>
            Have an idea that needs to come to life? I&apos;m always excited to
            work on new challenges and create digital solutions that make a
            difference. Let&apos;s turn your vision into reality!
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <Box
              component="a"
              href="/contact"
              sx={{
                px: 4,
                py: 2,
                borderRadius: "12px",
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)",
                },
              }}>
              💬 Get In Touch
            </Box>
            <Box
              component="a"
              href="https://github.com/omar-temsah"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 2,
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  background: "rgba(255, 255, 255, 0.2)",
                },
              }}>
              🐱 View More on GitHub
            </Box>
          </Box>
        </Box>
      </Fade>
    </Container>
  );
};

export default ProjectsPage;
