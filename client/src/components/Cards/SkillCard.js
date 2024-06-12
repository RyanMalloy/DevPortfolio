import { Box, Typography } from "@mui/material";
import React from "react";
import IconCircle from "../IconCircle";

const SkillCard = ({ skill }) => {
  return (
    <>
      <Box id="skill-card">
        <Box id="skill-card-logos">
          {skill.logos.map((logo, index) => {
            return <IconCircle icon={logo} key={index} style={{ width: "42px", height: "42px" }} />;
          })}
        </Box>
        <Box id="skill-card-info">
          <Typography variant="body1">{skill.subTitle}</Typography>

          <Typography variant="h5" gutterBottom color={"white"}>
            {skill.title}
          </Typography>
          <Typography variant="body1">{skill.content}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default SkillCard;
