import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Slide,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";

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

interface ProjectCardProps {
  project: Project;
  isDark: boolean;
  isVisible: boolean;
  delay?: number;
}

export const ProjectCard = ({
  project,
  isDark,
  isVisible,
  delay = 0,
}: ProjectCardProps) => (
  <Slide direction="up" in={isVisible} timeout={1000 + delay}>
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
        }`,
        borderRadius: "20px",
        transition: "all 0.4s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
        },
      }}>
      {/* Optimized Image Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 180, // Slightly reduced for more content space
          backgroundColor: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
          overflow: "hidden",
        }}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
            }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                fontWeight: 500,
              }}>
              No Image
            </Typography>
          </Box>
        )}
      </Box>

      {/* Flexible Content Container */}
      <CardContent
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>
        {/* Title - Responsive sizing */}
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 600,
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
            lineHeight: 1.2,
            wordBreak: "break-word",
          }}>
          {project.title}
        </Typography>

        {/* Description - Full content with good spacing */}
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.5,
            fontSize: "0.9rem",
            wordBreak: "break-word",
            flexGrow: 1,
          }}>
          {project.description}
        </Typography>

        {/* Tags - Responsive grid layout */}
        <Box sx={{ mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.8,
              alignItems: "flex-start",
            }}>
            {project.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  background: "rgba(6, 182, 212, 0.18)",
                  color: "#e4e4e7",
                  border: "1px solid #06b6d4",
                  fontSize: "0.7rem",
                  height: "1.4rem",
                  fontWeight: 500,
                  "& .MuiChip-label": {
                    px: 1,
                  },
                  "&:hover": {
                    background: "rgba(6, 182, 212, 0.32)",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.2s ease",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Action Buttons - Always at bottom with better spacing */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            pt: 1,
            mt: "auto",
          }}>
          {project.liveUrl && (
            <IconButton
              component="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Live Site"
              sx={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "white",
                width: 36,
                height: 36,
                "&:hover": {
                  background: "linear-gradient(135deg, #059669, #047857)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease",
              }}>
              <LaunchIcon fontSize="small" />
            </IconButton>
          )}

          {project.demoUrl && (
            <IconButton
              component="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Demo"
              sx={{
                background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                color: "white",
                width: 36,
                height: 36,
                "&:hover": {
                  background: "linear-gradient(135deg, #0891b2, #0e7490)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease",
              }}>
              <VisibilityIcon fontSize="small" />
            </IconButton>
          )}

          {project.githubUrl && (
            <IconButton
              component="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Source Code"
              sx={{
                background: "linear-gradient(135deg, #374151, #1f2937)",
                color: "white",
                width: 36,
                height: 36,
                "&:hover": {
                  background: "linear-gradient(135deg, #1f2937, #111827)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease",
              }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  </Slide>
);
