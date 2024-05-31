import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import TextSwap from "../components/TextSwap";
import Texts from "../assets/static/Texts";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <>
      <Box sx={{ height: "90vh", display: "flex" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
            <Typography
              variant={isMobile ? "h3" : "h1"}
              color={"primary"}
              sx={{ my: 3 }}
            >
              Hi, I'm Ryan. Specializing in <TextSwap texts={Texts} />, I am
              committed to delivering high-quality software solutions.
            </Typography>
            <Typography
              variant="body1"
              color={"primary.text"}
              sx={{ maxWidth: "600px" }}
            >
              As a dedicated Software Engineer, I specialize in designing and
              supporting innovative software solutions. I lead web development
              projects and manage CI/CD pipelines, always striving to enhance
              user experience and operational efficiency.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default HomePage;
