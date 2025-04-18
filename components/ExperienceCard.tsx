"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type ExperienceCardProps = {
  image: string;
  title: string;
  description: string;
};

const ExperienceCard = ({ image, title, description }: ExperienceCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: hovered ? 6 : 3,
        height: 700,
        position: "relative",
        transition: "all 0.3s ease",
        backgroundColor: "#fff",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        style={{
          objectFit: "cover",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.03)" : "scale(1)",
        }}
      />

      {/* Overlay: now covers the entire card */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(to bottom right, rgba(14, 42, 81, 0.85), rgba(0,0,0,0.7))"
            : "transparent",
          opacity: hovered ? 1 : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          color: "#fff",
          textAlign: "center",
          fontSize: "4rem",
          transition: "opacity 0.4s ease, background 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, fontSize: "4rem", color: "#fff" }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "2rem" }}>
          {description}
        </Typography>
      </Box>
    </Box>

  );
};

export default ExperienceCard;
