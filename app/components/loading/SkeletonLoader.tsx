"use client";

import { Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useColorScheme } from "@mui/material/styles";

interface SkeletonLoaderProps {
  variant: "home" | "about" | "skills" | "projects" | "contact";
}

const SkeletonLoader = ({ variant }: SkeletonLoaderProps) => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";

  const skeletonStyle = {
    bgcolor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
  };

  const renderHomeSkeleton = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        px: 4,
      }}>
      <Skeleton variant="text" width={200} height={40} sx={skeletonStyle} />
      <Skeleton
        variant="text"
        width={500}
        height={80}
        sx={{ ...skeletonStyle, my: 2 }}
      />
      <Skeleton variant="text" width={400} height={30} sx={skeletonStyle} />
      <Skeleton
        variant="text"
        width={600}
        height={60}
        sx={{ ...skeletonStyle, my: 3 }}
      />
      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Skeleton
          variant="rounded"
          width={180}
          height={50}
          sx={skeletonStyle}
        />
        <Skeleton
          variant="rounded"
          width={180}
          height={50}
          sx={skeletonStyle}
        />
      </Box>
    </Box>
  );

  const renderAboutSkeleton = () => (
    <Box sx={{ py: 8, px: 4 }}>
      <Skeleton
        variant="text"
        width={300}
        height={60}
        sx={{ ...skeletonStyle, mx: "auto", mb: 4 }}
      />
      <Skeleton
        variant="text"
        width={500}
        height={40}
        sx={{ ...skeletonStyle, mx: "auto", mb: 6 }}
      />

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              flexBasis: "25%",
              maxWidth: "25%",
              boxSizing: "border-box",
              padding: 8,
            }}>
            <Skeleton variant="rounded" height={120} sx={skeletonStyle} />
          </div>
        ))}
      </Grid>

      {/* Services Section */}
      <Grid container spacing={4}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              flexBasis: "33.33%",
              maxWidth: "33.33%",
              boxSizing: "border-box",
              padding: 8,
            }}>
            <Skeleton variant="rounded" height={200} sx={skeletonStyle} />
          </div>
        ))}
      </Grid>
    </Box>
  );

  const renderSkillsSkeleton = () => (
    <Box sx={{ py: 8, px: 4 }}>
      <Skeleton
        variant="text"
        width={250}
        height={60}
        sx={{ ...skeletonStyle, mx: "auto", mb: 6 }}
      />

      {/* Fun Facts */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              flexBasis: "25%",
              maxWidth: "25%",
              boxSizing: "border-box",
              padding: 8,
            }}>
            <Skeleton variant="rounded" height={100} sx={skeletonStyle} />
          </div>
        ))}
      </Grid>

      {/* Skills Grid */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              flexBasis: "50%",
              maxWidth: "50%",
              boxSizing: "border-box",
              padding: 8,
            }}>
            <Skeleton variant="rounded" height={250} sx={skeletonStyle} />
          </div>
        ))}
      </Grid>

      {/* Interpersonal Skills */}
      <Skeleton variant="rounded" height={300} sx={skeletonStyle} />
    </Box>
  );

  const renderProjectsSkeleton = () => (
    <Box sx={{ py: 8, px: 4 }}>
      <Skeleton
        variant="text"
        width={280}
        height={60}
        sx={{ ...skeletonStyle, mx: "auto", mb: 6 }}
      />

      {/* Project Stats */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              flexBasis: "25%",
              maxWidth: "25%",
              boxSizing: "border-box",
              padding: 8,
            }}>
            <Skeleton variant="rounded" height={100} sx={skeletonStyle} />
          </div>
        ))}
      </Grid>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              flexBasis: "33.33%",
              maxWidth: "33.33%",
              boxSizing: "border-box",
              padding: 8,
            }}>
            <Skeleton variant="rounded" height={300} sx={skeletonStyle} />
          </div>
        ))}
      </Grid>
    </Box>
  );

  const renderContactSkeleton = () => (
    <Box sx={{ py: 8, px: 4, maxWidth: "600px", mx: "auto" }}>
      <Skeleton
        variant="text"
        width={250}
        height={60}
        sx={{ ...skeletonStyle, mx: "auto", mb: 6 }}
      />

      <Skeleton variant="rounded" height={400} sx={skeletonStyle} />
    </Box>
  );

  const renderVariant = () => {
    switch (variant) {
      case "home":
        return renderHomeSkeleton();
      case "about":
        return renderAboutSkeleton();
      case "skills":
        return renderSkillsSkeleton();
      case "projects":
        return renderProjectsSkeleton();
      case "contact":
        return renderContactSkeleton();
      default:
        return renderHomeSkeleton();
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: "100vh",
        background: isDark
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
          : "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
        zIndex: 9998,
        overflow: "auto",
      }}>
      {renderVariant()}
    </Box>
  );
};

export default SkeletonLoader;
