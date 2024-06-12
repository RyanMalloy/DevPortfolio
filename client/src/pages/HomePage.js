import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import SplineArt from "../components/Art/SplineArt";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
        <Box id="hero-container">
          <Box id="spline">
            <SplineArt />
          </Box>

          <Box id="hero">
            <Typography variant={isMobile ? "h4" : "h3"} color={"white"} sx={{ lineHeight: "95%", my: "10px", fontWeight: "bold" }}>
              Hi, I'm Ryan
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"} color={"white"} sx={{ maxWidth: "500px", minWidth: "375px", marginBottom: "10px" }}>
              I'm a Full-Stack Software Engineer, and I specialize in designing and creating innovative software solutions.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, padding: 0, alignItems: "center", justifyContent: "center" }}>
              <Button variant="contained" component={Link} to="/about" startIcon={<SportsMartialArtsIcon />}>
                About Me
              </Button>

              <Button variant="contained" component={Link} to="/projects" startIcon={<CodeIcon />}>
                Projects
              </Button>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default HomePage;
