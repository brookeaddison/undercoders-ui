
import { createTheme } from "@mui/material/styles";

// theme/colors.ts (or directly in your theme file)

export const colors = {
  // 🔵 Core Brand
  navy: "#0d2c52",       // primary
  forest: "#264d3c",     // secondary
  berry: "#782c4d",      // logo & CTA pop
  background: "#f5f7fa", // default light
  paper: "#ffffff",      // for cards

  // 🎯 Accent Pops (Youth-facing vibes)
  orange: "#f46036",     // active, fun
  teal: "#5ec5c3",       // vibrant but chill
  purple: "#6a4c93",     // soft, techy, cool
  yellow: "#ffd166",     // happy, energetic

  // 🧊 Neutrals
  grayText: "#555",
  lightGray: "#e5e7eb",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d2c52", // Navy (backgrounds, nav, headers)
    },
    secondary: {
      main: "#264d3c", // Forest green (buttons, highlights)
    },
    background: {
      default: "#f5f7fa", // Light soft neutral
      paper: "#ffffff",   // For cards and containers
    },
    warning: {
      main: "#782c4d", // Berry (brand color — logo, CTA highlight)
    },
    info: {
      main: "#c8dae9", // Misty blue
    },
  },
  typography: {
    fontFamily: "'League Spartan', sans-serif",
  },
});



export default theme;
