import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../assets/data/ProjectData";
import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const ProjectCards = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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
