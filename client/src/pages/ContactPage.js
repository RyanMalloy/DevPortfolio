import React from "react";
import SplineBall from "../components/Art/SplineBall";
import { Container, Typography, Box, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import LineGridFlat from "../components/LineGrid/LineGridFlat";
import LineGridUp from "../components/LineGrid/LineGridUp";
import Navbar from "../components/Navbar";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 608px)" });
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <LineGridUp>
          <LineGridFlat>
            <Container>
              <Container sx={{ position: "absolute", zIndex: 10 }}>
                <Navbar />
              </Container>
            </Container>

            <Box id="hero-container">
              <Box id="spline">
                <SplineBall />
              </Box>

              <Box id="hero">
                <Typography variant={isMobile ? "h4" : "h3"} color={"white"} sx={{ lineHeight: "95%", my: "10px", fontWeight: "bold" }}>
                  Get in Touch
                </Typography>
                <Typography variant={isMobile ? "body2" : "body1"} color={"white"} sx={{ maxWidth: "500px", minWidth: "375px", marginBottom: "10px" }}>
                  Don't hesitate to reach out! Whether you need help with a project, have a question about my work, send me a message below and I'll get back to you as soon as possible.
                </Typography>
                <Button endIcon={<SendIcon/>} variant="contained" onClick={() => (window.location = "mailto:ryanpmalloy@icloud.com")}>
                  Email Me
                </Button>
              </Box>
            </Box>
          </LineGridFlat>
        </LineGridUp>
      </motion.div>
    </>
  );
};

export default ProjectsPage;
