import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import IconCircle from "../IconCircle";
import GitHubLogo from "../../assets/images/logos/GitHubLogo";

const ProjectCard = ({ project }) => {
  return (
    <>
      <Card id="project-card">
        <CardMedia id="project-banner" sx={{ height: 140, filter: "blur(1.5px)" }} image={project.banner} title={project.title} />
        <Typography id="project-subtitle" variant="body1" gutterBottom>
          {project.subTitle}
        </Typography>
        <CardContent sx={{ borderTop: "1px solid rgba(64, 64, 64, 1)", display: "flex", flexDirection: "column" }}>
          <Box id="skill-card-logos">
            {project.logos.map((logo, index) => {
              return <IconCircle icon={logo} key={index} style={{ width: "42px", height: "42px" }} />;
            })}
          </Box>

          <Typography variant="h5" gutterBottom color={"white"}>
            {project.title}
          </Typography>
          <Typography variant="body1">{project.content}</Typography>
          <CardActions sx={{ marginTop: "auto" }}>
            {project.link.includes("github") ? (
              <IconButton
                href={project.link}
                target="_blank"
                rel="noreferrer"
                sx={{
                  backgroundColor: "white",
                  height: "36px",
                  width: "36px",
                  padding: 0,
                  "&:hover": {
                    backgroundColor: "gray",
                  },
                }}>
                <GitHubLogo />
              </IconButton>
            ) : (
              <Button variant="outlined" href={project.link} target="_blank" rel="noreferrer">
                View Site
              </Button>
            )}
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
