import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./themes/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import "./assets/css/fonts/fonts.css";
import "./assets/css/app.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container sx={{ overflowX: "hidden" }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
