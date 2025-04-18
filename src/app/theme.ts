import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#0d2c52", // Navy
    },
    secondary: {
      main: "#264d3c", // Forest
    },
    background: {
      default: "#f5f7fa", // Soft Gray
    },
    info: {
      main: "#c8dae9", // Misty Blue
    },
    error: {
      main: "#782c4d", // Berry (used sparingly)
    },
  },
  typography: {
    fontFamily: "'League Spartan', sans-serif",
  },

});


export default theme;
