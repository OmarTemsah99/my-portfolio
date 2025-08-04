import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  Slide,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
      {project.image && (
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          sx={{
            objectFit: "cover",
            background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
          }}
        />
      )}

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 600,
            fontSize: { xs: "1.2rem", sm: "1.4rem" },
            mb: 2,
            lineHeight: 1.3,
          }}>
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.6,
            mb: 3,
          }}>
          {project.description}
        </Typography>

        {/* Tags */}
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}>
            {project.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  background: "rgba(139, 92, 246, 0.2)",
                  color: "#8b5cf6",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  fontSize: "0.75rem",
                  "&:hover": {
                    background: "rgba(139, 92, 246, 0.3)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "flex-end",
            mt: "auto",
          }}>
          {project.liveUrl && (
            <IconButton
              component="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "white",
                "&:hover": {
                  background: "linear-gradient(135deg, #059669, #047857)",
                  transform: "scale(1.1)",
                },
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
              sx={{
                background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                color: "white",
                "&:hover": {
                  background: "linear-gradient(135deg, #0891b2, #0e7490)",
                  transform: "scale(1.1)",
                },
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
              sx={{
                background: "linear-gradient(135deg, #374151, #1f2937)",
                color: "white",
                "&:hover": {
                  background: "linear-gradient(135deg, #1f2937, #111827)",
                  transform: "scale(1.1)",
                },
              }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  </Slide>
);
