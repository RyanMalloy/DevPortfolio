import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import LineGridFlat from "../components/LineGrid/LineGridFlat";
import LineGridUp from "../components/LineGrid/LineGridUp";
import Navbar from "../components/Navbar";
import SkillCards from "../components/Cards/SkillCards";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { motion } from "framer-motion";
import SplineRibbon from "../components/Art/SplineRibbon";

const AboutPage = () => {
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
                <SplineRibbon />
              </Box>

              <Box id="hero-about">
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                  <SportsMartialArtsIcon sx={{ color: "white", height: "36px", width: "36px" }} />
                  <Typography variant={isMobile ? "h4" : "h3"} color={"white"} sx={{ lineHeight: "95%", my: "10px", fontWeight: "bold" }}>
                    About Me
                  </Typography>
                </Box>
                <Typography variant={isMobile ? "body2" : "body1"} color={"white"} sx={{ maxWidth: "500px", minWidth: "375px", marginBottom: "10px" }}>
                  I'm from Cleveland, Ohio, with a Bachelor's degree in Software Engineering from Miami University. Check out my skills below.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, padding: 0, alignItems: "center", justifyContent: "center" }}>
                  <Button startIcon={<CodeIcon />} variant="contained" color="primary" href="/projects">
                    Projects
                  </Button>
                  <Button endIcon={<SendIcon />} variant="contained" href="/contact">
                    Contact Me
                  </Button>
                </Box>
              </Box>
              <Box sx={{ }}>
                <SkillCards />
              </Box>
            </Box>
          </LineGridFlat>
        </LineGridUp>
      </motion.div>
    </>
  );
};

export default AboutPage;
