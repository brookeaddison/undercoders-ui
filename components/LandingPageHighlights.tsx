"use client";

import { Box, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";

const highlights = [
  {
    title: 'Learn & Build',
    description: 'Create real coding projects and learn web development in a fun, beginner-friendly way.',
    image: '/learnandbuild.png',
  },
  {
    title: 'Connect & Grow',
    description: 'Meet other Undercoders, join mentorship sessions, and be part of a welcoming tech community.',
    image: '/connectandgrow.png',
  },
  {
    title: 'Level Up',
    description: 'Work on your portfolio, explore future careers, and gain confidence in your skills.',
    image: '/levelup.png',
  },
];

const LandingPageHighlights = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 15 }}>
      <Typography
        sx={{
          fontFamily: "'League Spartan', sans-serif",
          fontWeight: "bold",
          letterSpacing: "2rem",
          textTransform: "uppercase",
          fontSize: {
            xs: "2rem",
            sm: "2.8rem",
            md: "3.5rem",
          },
          textAlign: "center",
          color: "#0d2c52",
        }}
      >
        What to Expect
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "10px",
          backgroundColor: "#264d3c",
          mx: "auto",
          mt: 4,
          borderRadius: "3px",
          mb: 15,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10,
          pb: 15,
        }}
      >
        {highlights.map((item, i) => (
          <Box
            key={i}
            sx={{
              width: {
                xs: '100%',
                sm: '360px',
                md: '400px',
              },
              aspectRatio: '1 / 1', // square
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ExperienceCard {...item} />
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default LandingPageHighlights;
