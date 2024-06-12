import React from "react";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const HeroArtSmall = () => {
  const animations = [
    { duration: 2, x: [0, 5, 0], y: [0, -5, 0] },
    { duration: 2.5, x: [0, -5, 0], y: [0, 5, 0] },
    { duration: 3, x: [0, 5, 0], y: [0, 5, 0] },
    { duration: 2, x: [0, -5, 0], y: [0, -5, 0] },
    { duration: 2.5, x: [0, 5, 0], y: [0, -5, 0] },
    { duration: 3, x: [0, -5, 0], y: [0, 5, 0] },
    { duration: 2, x: [0, 5, 0], y: [0, -5, 0] },
    { duration: 2.5, x: [0, -5, 0], y: [0, 5, 0] },
    { duration: 3, x: [0, 5, 0], y: [0, -5, 0] },
    { duration: 2, x: [0, -5, 0], y: [0, 5, 0] },
    { duration: 2.5, x: [0, 5, 0], y: [0, -5, 0] },
    { duration: 3, x: [0, -5, 0], y: [0, 5, 0] },
    { duration: 2, x: [0, 5, 0], y: [0, -5, 0] },
    { duration: 2.5, x: [0, -5, 0], y: [0, 5, 0] },
    { duration: 3, x: [0, 5, 0], y: [0, -5, 0] },
    { duration: 2, x: [0, -5, 0], y: [0, 5, 0] },
    { duration: 2.5, x: [0, 5, 0], y: [0, -5, 0] },
    { duration: 3, x: [0, -5, 0], y: [0, 5, 0] },
  ];

  const boxStyles = [
    { top: 15.5, left: 0, width: 92.5, height: 34.5, bgcolor: "#F5F5F5" },
    { top: 0, left: 98.5, width: 48.5, height: 50, bgcolor: "#007BFF" },
    { top: 0, left: 153, width: 73, height: 15.5, bgcolor: "#FF7F63" },
    { top: 21.5, left: 197.5, width: 28.5, height: 28.5, bgcolor: "#007BFF" },
    { top: 21.5, left: 153, width: 38.5, height: 28.5, bgcolor: "#F5F5F5" },
    { top: 56, left: 0, width: 50, height: 106, bgcolor: "#FF7F63" },
    { top: 82, left: 56, width: 10, height: 80, bgcolor: "#F5F5F5" },
    { top: 56, left: 56, width: 10, height: 20, bgcolor: "#007BFF" },
    { top: 129.5, left: 72, width: 95.5, height: 102, bgcolor: "#007BFF" },
    { top: 178, left: 173.5, width: 46.5, height: 59.5, bgcolor: "#F5F5F5" },
    { top: 230, left: 226, width: 24, height: 20, bgcolor: "#20C997" },
    { top: 178, left: 226, width: 24, height: 46, bgcolor: "#007BFF" },
    { top: 21.5, left: 232, width: 18, height: 103.5, bgcolor: "#FF7F63" },
    { top: 129.5, left: 173.5, width: 58.5, height: 42.5, bgcolor: "#F5F5F5" },
    { top: 56, left: 72, width: 154, height: 67.5, bgcolor: "#20C997" },
    { top: 168, left: 18.5, width: 47.5, height: 63.5, bgcolor: "#20C997" },
    { top: 237.5, left: 0, width: 106, height: 12.5, bgcolor: "#FF7F63" },
    { top: 237.5, left: 112, width: 55.5, height: 12.5, bgcolor: "#F5F5F5" },
  ];

  return (
    <Grid container style={{ width: 250, height: 250, position: "relative" }}>
      {boxStyles.map((style, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          animate={{
            x: animations[index].x,
            y: animations[index].y,
          }}
          transition={{
            duration: animations[index].duration,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Box sx={{ ...style, position: "absolute", borderRadius: 2 }} />
        </motion.div>
      ))}
    </Grid>
  );
};

export default HeroArtSmall;
