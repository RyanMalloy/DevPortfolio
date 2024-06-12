import React from "react";
import SplineNebula from "../components/Art/SplineNebula";
import { Container, Typography, Box, Button, IconButton } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import LineGridFlat from "../components/LineGrid/LineGridFlat";
import LineGridUp from "../components/LineGrid/LineGridUp";
import Navbar from "../components/Navbar";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { motion } from "framer-motion";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

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
                <SplineNebula />
              </Box>

              <Box id="hero">
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                  <CodeIcon sx={{ color: "white", height: "36px", width: "36px" }} />
                  <Typography variant={isMobile ? "h4" : "h3"} color={"white"} sx={{ lineHeight: "95%", my: "10px", fontWeight: "bold" }}>
                    Projects
                  </Typography>
                </Box>
                <Typography variant={isMobile ? "body2" : "body1"} color={"white"} sx={{ maxWidth: "500px", minWidth: "375px", marginBottom: "10px" }}>
                  Check out some of my projects below!
                </Typography>
                <Box sx={{ display: "flex", gap: 2, padding: 0, alignItems: "center", justifyContent: "center" }}>
                  <Button startIcon={<SportsMartialArtsIcon />} variant="contained" color="primary" href="/about">
                    About Me
                  </Button>
                  <Button endIcon={<SendIcon />} variant="contained" href="/contact">
                    Contact Me
                  </Button>
                </Box>
                <IconButton href="#projects">
                  <ArrowCircleDownIcon sx={{ color: "white", height: "64px", width: "64px", marginTop: "1rem" }} />
                </IconButton>
              </Box>
            </Box>
          </LineGridFlat>
        </LineGridUp>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <LineGridUp>
          <LineGridFlat>
            <Box id="projects">
              <Box id="hero">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CodeIcon sx={{ color: "white", height: "36px", width: "36px" }} />
                  <Typography variant={isMobile ? "h4" : "h3"} color={"white"} sx={{ lineHeight: "95%", my: "10px", fontWeight: "bold" }}>
                    Projects
                  </Typography>
                </Box>
                <Typography variant={isMobile ? "body2" : "body1"} color={"white"} sx={{ maxWidth: "500px", minWidth: "375px", marginBottom: "10px" }}>
                  Check out some of my projects below!
                </Typography>
                <Box sx={{ display: "flex", gap: 2, padding: 0, alignItems: "center" }}>
                  <Button startIcon={<SportsMartialArtsIcon />} variant="contained" color="primary" href="/about">
                    About Me
                  </Button>
                  <Button endIcon={<SendIcon />} variant="contained" href="/contact">
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Box>
          </LineGridFlat>
        </LineGridUp>
      </motion.div>
    </>
  );
};

export default ProjectsPage;
