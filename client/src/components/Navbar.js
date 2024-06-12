import { Box, Button, IconButton, Drawer, Divider, Typography } from "@mui/material";
import React from "react";
import PixelHeadshot from "../assets/images/pixel-headshot.png";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CottageIcon from "@mui/icons-material/Cottage";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box sx={{  }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}>
            <IconButton component={Link} to="/">
              <img src={PixelHeadshot} alt="Pixel Headshot" style={{ height: "64px", width: "64px", borderRadius: "50%" }} />
            </IconButton>

            {!isMobile && (
              <>
                <Button variant={location.pathname === "/" ? "outlined" : "text"} component={Link} to="/" startIcon={<CottageIcon />}>
                  Home
                </Button>
                <Button variant={location.pathname === "/about" ? "outlined" : "text"} component={Link} to="/about" startIcon={<SportsMartialArtsIcon />}>
                  About
                </Button>
                <Button variant={location.pathname === "/projects" ? "outlined" : "text"} component={Link} to="/projects" startIcon={<CodeIcon />}>
                  Projects
                </Button>
              </>
            )}
          </Box>
          {isMobile ? (
            <>
              <IconButton onClick={toggleDrawer(true)}>
                {open ? <CloseIcon sx={{ color: "white", width: "28px", height: "28px" }} /> : <MenuIcon sx={{ color: "white", width: "28px", height: "28px" }} />}
              </IconButton>
            </>
          ) : (
            <Button variant={location.pathname === "/contact" ? "outlined" : "text"} component={Link} to="/contact" endIcon={<SendIcon />}>
              Contact
            </Button>
          )}
        </Box>
      </Box>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box id="drawer" sx={{ width: 250, backgroundColor: "#121212", height: "100vh", display: "flex", flexDirection: "column", p: "1rem" }} role="presentation" onClick={toggleDrawer(false)}>
          <IconButton>
            <img src={PixelHeadshot} alt="Pixel Headshot" style={{ height: "64px", width: "64px", borderRadius: "50%" }} />
          </IconButton>
          <Divider sx={{ backgroundColor: "white", my: 2 }} />
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: 2 }}>
            <Button variant={location.pathname === "/" ? "outlined" : "text"} component={Link} to="/" fullWidth startIcon={<CottageIcon />}>
              Home
            </Button>
            <Button variant={location.pathname === "/about" ? "outlined" : "text"} component={Link} to="/about" fullWidth startIcon={<SportsMartialArtsIcon />}>
              About
            </Button>
            <Button variant={location.pathname === "/projects" ? "outlined" : "text"} component={Link} to="/projects" fullWidth startIcon={<CodeIcon />}>
              Projects
            </Button>
            <Button variant={location.pathname === "/contact" ? "outlined" : "text"} component={Link} to="/contact" fullWidth endIcon={<SendIcon />}>
              Contact
            </Button>
          </Box>

          <Typography variant="body2" color="white" sx={{ mt: "auto", textAlign: "center" }}>
            Ryan Malloy
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
