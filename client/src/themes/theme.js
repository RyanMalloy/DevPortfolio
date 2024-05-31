import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      text: "#dcdcef",
      main: "#9595e6",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "3rem",
      lineHeight: "1.2",
      letterSpacing: "1px",
    },
    h3: {
      fontSize: "1.2rem",
      lineHeight: "1.2",
      letterSpacing: "1px",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
