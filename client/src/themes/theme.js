import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      main: "#dcdcef",
      secondary: "#b3b3b3",
    },
    primary: {
      main: "#dcdcef",
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
      lineHeight: "1.2",
      letterSpacing: "1px",
    },
    body1: {
      color: "#b3b3b3",
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
