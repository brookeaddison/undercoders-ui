// components/BlogCard.tsx
"use client";

import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
  color: string;
};

const BlogCard = ({ title, excerpt, date, color }: BlogCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        boxShadow: hovered ? 6 : 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-5px)' : 'none',
        cursor: 'pointer',
        backgroundColor: '#fff',
        position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Color Bar */}
      <Box sx={{ width: '10px', backgroundColor: color }} />

      {/* Content */}
      <Box sx={{ px: 4, py: 3, flex: 1 }}>
        <Typography variant="caption" color="text.secondary" fontWeight="bold" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {excerpt}
        </Typography>
      </Box>

      {/* Read more arrow */}
      {hovered && (
        <ArrowForwardIcon
          sx={{
            position: 'absolute',
            right: 16,
            bottom: 16,
            color: '#264d3c',
            transition: 'transform 0.2s ease-in',
          }}
        />
      )}
    </Box>
  );
};

export default BlogCard;
