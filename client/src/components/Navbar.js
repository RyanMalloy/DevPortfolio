import { Box, Button } from "@mui/material";
import React from "react";
import Logo from "../assets/svgs/logo.js";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button variant="text" color="primary">
            <Logo style={{ height: "48px", width: "48px" }} />
          </Button>
          <Button variant="text" color="primary">
            Home
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
