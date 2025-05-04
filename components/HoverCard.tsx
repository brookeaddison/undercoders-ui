"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import Link from "next/link";

type HoverCardProps = {
    post: {
      title: string;
      description: string;
      image: string;
      borderColor?: string;
      slug: string; 
    };
    index: number;
  };
  

const HoverCard = ({ post, index }: HoverCardProps) => {
    const [hovered, setHovered] = useState(false);
    const isReversed = index % 2 !== 0;

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                display: "flex",
                flexDirection: isReversed ? "row-reverse" : "row",
                alignItems: "center",
                padding: 10,
                backgroundColor: post.borderColor || "#0d2c52",
                boxShadow: hovered ? 6 : 2,
                transition: "all 0.3s ease",
                position: "relative",
                minHeight: { xs: 180, sm: 240, md: 280 },
            }}
        >
            {/* Enlarged image */}
            <Box
                sx={{
                    width: { xs: 140, sm: 200, md: 240 },
                    height: { xs: 140, sm: 200, md: 240 },
                    position: "relative",
                    mx: 4,
                    flexShrink: 0,
                    borderRadius: "60px",
                    overflow: "hidden",
                }}
            >
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </Box>

            {/* Text content */}
            <Box sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        mb: 1,
                        fontFamily: "'League Spartan', sans-serif",
                    }}
                >
                    {post.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#f0f0f0" }}>
                    {post.description}
                </Typography>
                <Link href={`/programs/${post.slug}`} passHref>
                    <Typography
                        variant="body2"
                        sx={{
                            mt: 2,
                            color: "#fff",
                            fontWeight: "medium",
                            textDecoration: "underline",
                            '&:hover': {
                                textDecoration: 'none',
                            }
                        }}
                    >
                        Read more →
                    </Typography>
                </Link>

            </Box>

            {/* Hover Arrow stays on the right */}
            {hovered && (
                <ArrowForwardIcon
                    sx={{
                        color: "#fff",
                        fontSize: "2rem",
                        position: "absolute",
                        right: 24,
                    }}
                />
            )}
        </Box>
    );
};

export default HoverCard;
