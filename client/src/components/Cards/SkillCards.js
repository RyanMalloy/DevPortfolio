import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SkillData from "../../assets/data/SkillData";
import SkillCard from "./SkillCard";
import Marquee from "react-marquee-slider";
import { useMediaQuery } from "react-responsive";

const SkillCards = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Box id="skill-cards">
        <Marquee velocity={isMobile ? 10 : 30} resetAfterTries={200}>
          {Object.values(SkillData).map((skill, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </Marquee>
      </Box>
    </>
  );
};

export default SkillCards;
