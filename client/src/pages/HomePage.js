import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import HeroArt from "../components/HeroArt";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: `${isMobile ? "column" : "row"}`,
          gap: 2,
          mb: "100px",
        }}
      >
        {isMobile && (
          <Box sx={{ maxHeight: "500px", width: "500px" }}>
            <HeroArt style={{ height: "100%", width: "100%" }} />
          </Box>
        )}
        <Box>
          <Typography
            variant="h3"
            sx={{ lineHeight: "95%", my: "10px", fontWeight: "bold" }}
          >
            Hi, I'm Ryan
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "500px", marginBottom: "10px" }}
          >
            As a dedicated Software Engineer, I specialize in designing and
            supporting innovative software solutions.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, padding: 0 }}>
            <Button variant="outlined" color="primary" href="#about">
              How does it work?
            </Button>

            <Button variant="contained" color="primary" href="/campaigns">
              Get Started
            </Button>
          </Box>
        </Box>
        {!isMobile && (
          <Box sx={{ maxHeight: "500px", width: "500px" }}>
            <HeroArt style={{ height: "100%", width: "100%" }} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default HomePage;
