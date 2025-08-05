"use client";

import { Box } from "@mui/material";
import Image from "next/image";

const CustomLoader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        zIndex: 9999,
      }}>
      {/* Sleepy Temsah GIF filling the screen */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}>
        <Image
          src="/sleepy_temsah.gif"
          alt="Loading..."
          fill
          style={{ objectFit: "cover" }}
          priority
          unoptimized
        />
      </Box>
    </Box>
  );
};

export default CustomLoader;
