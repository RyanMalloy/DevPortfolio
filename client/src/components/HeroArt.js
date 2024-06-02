import React from "react";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
const HeroArt = () => {
  return (
    <Grid container style={{ width: 500, height: 500, position: "relative" }}>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 31, left: 0, width: 185, height: 69, bgcolor: "#F5F5F5", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 0, left: 197, width: 97, height: 100, bgcolor: "#007BFF", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 0, left: 306, width: 146, height: 31, bgcolor: "#FF7F63", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 43, left: 395, width: 57, height: 57, bgcolor: "#007BFF", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 43, left: 306, width: 77, height: 57, bgcolor: "#F5F5F5", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 112, left: 0, width: 100, height: 212, bgcolor: "#FF7F63", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 164, left: 112, width: 20, height: 160, bgcolor: "#F5F5F5", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 112, left: 112, width: 20, height: 40, bgcolor: "#007BFF", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 259, left: 144, width: 191, height: 204, bgcolor: "#007BFF", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 356, left: 347, width: 93, height: 119, bgcolor: "#F5F5F5", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 460, left: 452, width: 48, height: 40, bgcolor: "#20C997", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 356, left: 452, width: 48, height: 92, bgcolor: "#007BFF", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 43, left: 464, width: 36, height: 207, bgcolor: "#FF7F63", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 259, left: 347, width: 117, height: 85, bgcolor: "#F5F5F5", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 112, left: 144, width: 308, height: 135, bgcolor: "#20C997", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 336, left: 37, width: 95, height: 127, bgcolor: "#20C997", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 475, left: 0, width: 212, height: 25, bgcolor: "#FF7F63", borderRadius: 2 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} >
        <Box sx={{ position: "absolute", top: 475, left: 224, width: 111, height: 25, bgcolor: "#F5F5F5", borderRadius: 2 }} />
      </motion.div>
    </Grid>
  );
};

export default HeroArt;