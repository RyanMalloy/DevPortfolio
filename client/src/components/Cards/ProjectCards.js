import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../assets/data/ProjectData";
import { Box } from "@mui/material";

const ProjectCards = () => {
  return (
    <>
      <Box id="project-cards" sx={{}}>
        {Object.values(ProjectData).map((project, index) => (
          <ProjectCard project={project} index={index} />
        ))}
      </Box>
    </>
  );
};

export default ProjectCards;
