import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Slide,
  Stack,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

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
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<string | number>("auto");
  const contentRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click if any
    if (contentRef.current) {
      // Set fixed height to current height before state update triggers render
      setContentHeight(contentRef.current.scrollHeight);
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (measureRef.current) {
      // Measure the inner content height immediately after render
      const targetHeight = measureRef.current.offsetHeight;
      setContentHeight(targetHeight);

      // Reset to auto after transition
      const timer = setTimeout(() => {
        setContentHeight("auto");
      }, 400); // Match transition duration

      return () => clearTimeout(timer);
    }
  }, [expanded]);

  return (
    <Slide direction="up" in={isVisible} timeout={900 + delay}>
      <Card
        tabIndex={0}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "visible", // Changed to visible for proper scaling
          borderRadius: "22px",
          background: isDark
            ? "rgba(255,255,255,0.04)"
            : "rgba(255,255,255,0.12)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.12)",
          transition: "transform .45s ease, box-shadow .45s ease",
          "&:hover, &:focus-visible": {
            transform: "translateY(-8px)",
            boxShadow:
              "0 0 0 1px rgba(139,92,246,.5), 0 30px 60px rgba(139,92,246,.25)",
            zIndex: 1,
          },
        }}>
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            height: 190,
            overflow: "hidden",
            borderTopLeftRadius: "22px",
            borderTopRightRadius: "22px",
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,.55), transparent 60%)",
              opacity: 0,
              transition: "opacity .4s ease",
            },
            "&:hover::after": { opacity: 1 },
            "& img": {
              transition: "transform .6s ease",
            },
            "&:hover img": {
              transform: "scale(1.06)",
            },
          }}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Box
              sx={{
                height: "100%",
                display: "grid",
                placeItems: "center",
                background: "linear-gradient(135deg, #1f2937, #111827)",
              }}>
              <Typography color="rgba(255,255,255,.5)">No preview</Typography>
            </Box>
          )}
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              lineHeight: 1.25,
            }}>
            {project.title}
          </Typography>

          <Box
            ref={contentRef}
            sx={{
              height: contentHeight,
              overflow: "hidden",
              transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
            <Box ref={measureRef}>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.55,
                }}>
                {expanded
                  ? project.description
                  : project.description.slice(0, 100) +
                    (project.description.length > 100 ? "..." : "")}
                {project.description.length > 100 && (
                  <Box
                    component="span"
                    onClick={handleToggle}
                    sx={{
                      color: "primary.main",
                      cursor: "pointer",
                      fontWeight: 500,
                      ml: 1,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}>
                    {expanded ? "Show less" : "Show more"}
                  </Box>
                )}
              </Typography>
            </Box>
          </Box>

          {/* Tags */}
          <Stack direction="row" flexWrap="wrap" gap={0.8} mt={0.5}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  fontSize: "0.68rem",
                  borderRadius: "6px",
                  height: 22,
                  border: "1px solid rgba(6,182,212,.5)",
                  "&:hover": {
                    cursor: "default",
                  },
                }}
                color="primary"
              />
            ))}
          </Stack>

          {/* Actions */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "flex-end",
              mt: "auto",
              opacity: 0,
              transform: "translateY(6px)",
              transition: "all .35s ease",
              ".MuiCard-root:hover &": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}>
            {project.liveUrl && (
              <IconButton
                href={project.liveUrl}
                component="a"
                target="_blank"
                sx={{
                  background: "linear-gradient(135deg,#10b981,#059669)",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.15)",
                    transform: "scale(0)",
                    transition: "transform 0.3s ease-out",
                    borderRadius: "50%",
                  },
                  "&:hover::before": {
                    transform: "scale(1)",
                  },
                }}>
                <LaunchIcon fontSize="small" />
              </IconButton>
            )}

            {project.demoUrl && (
              <IconButton
                href={project.demoUrl}
                component="a"
                target="_blank"
                sx={{
                  background: "linear-gradient(135deg,#06b6d4,#0891b2)",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.15)",
                    transform: "scale(0)",
                    transition: "transform 0.3s ease-out",
                    borderRadius: "50%",
                  },
                  "&:hover::before": {
                    transform: "scale(1)",
                  },
                }}>
                <VisibilityIcon fontSize="small" />
              </IconButton>
            )}

            {project.githubUrl && (
              <IconButton
                href={project.githubUrl}
                component="a"
                target="_blank"
                sx={{
                  background: "linear-gradient(135deg,#374151,#111827)",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.15)",
                    transform: "scale(0)",
                    transition: "transform 0.3s ease-out",
                    borderRadius: "50%",
                  },
                  "&:hover::before": {
                    transform: "scale(1)",
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
};
