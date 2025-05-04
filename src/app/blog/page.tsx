// app/blog/page.tsx
"use client";

import { Box, Typography } from "@mui/material";
import BlogCard from "../../../components/BlogCard";

const blogPosts = [
  {
    title: "The Pitfalls of DEI in Tech",
    excerpt:
      "Explore the long-term ramifications of diversity initiatives that prioritize identity over skill, and why merit-based inclusion matters.",
    date: "April 2025",
    color: "#a4b8e8", 
  },
  {
    title: "Why Undercoders Isn't DEI",
    excerpt:
      "We don't hand out seats—we open doors. Learn how Undercoders promotes authentic inclusion through opportunity and accountability.",
    date: "April 2025",
    color: "#8199d4", 
  },
  {
    title: "Tech’s Diversity Gap: The Real Numbers",
    excerpt:
      "A data-driven look at representation in tech. Who’s in the room? Who’s missing? And why pipelines matter more than quotas.",
    date: "April 2025",
    color: "#5773b8",
  },
  {
    title: "Natural Inclinations, Real Impact",
    excerpt:
      "What if some gaps are driven by interest—not injustice? We examine gender and preference trends in STEM and how to meet people where they thrive.",
    date: "April 2025",
    color: "#34529c", 
  },
  {
    title: "Retention > Recruitment",
    excerpt:
      "DEI hires often leave within two years. Let’s talk about what real support and technical growth look like—and why they matter more than surface stats.",
    date: "April 2025",
    color: "#1b377c", 
  },
  {
    title: "Why We Built Undercoders",
    excerpt:
      "This isn’t activism. It’s accountability. We built Undercoders because we believe the next generation of developers should be skilled, confident, and seen.",
    date: "April 2025",
    color: "#0b235e", 
  },
];

const BlogPage = () => {
  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: 10 }}>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          fontFamily: "'League Spartan', sans-serif",
          textAlign: 'center',
          color: '#100b5e',
          mb: 1,
        }}
      >
        Inside the Minds:
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontFamily: "'League Spartan', sans-serif",
          textAlign: 'center',
          color: '#5762b0',
          mb: 8,
        }}
      >
        Underdog to Innovator
      </Typography>

      <Box sx={{ display: 'grid', gap: 6 }}>
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </Box>
    </Box>
  );
};

export default BlogPage;
