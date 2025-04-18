"use client";

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import ExperienceCard from './ExperienceCard';

const highlights = [
    {
      title: 'Learn & Build',
      description: 'Create real coding projects and learn web development in a fun, beginner-friendly way.',
      image: '/learn.png',
    },
    {
      title: 'Connect & Grow',
      description: 'Meet other Undercoders, join mentorship sessions, and be part of a welcoming tech community.',
      image: '/connect.png',
    },
    {
      title: 'Level Up',
      description: 'Work on your portfolio, explore future careers, and gain confidence in your skills.',
      image: '/levelup.png',
    },
  ];

const Introduction = () => {
    return (
        <Box
  sx={{
    position: 'relative',
    width: '100%',
    maxWidth: '2500px',        
    height: '85vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '50px',
    p: 3,                      // ⬅️ Padding inside the box
    m: 2,                      // ⬅️ Margin around the box (top/bottom/left/right)
    mx: 'auto',                // ⬅️ Center horizontally if using maxWidth
    boxShadow: 3,              
    backgroundColor: 'rgba(255,255,255,0.05)', 
    backdropFilter: 'blur(10px)',             
  }}
>
            {/* Background image */}
            <Image
                src="/Introduction.png"
                alt="computer lab"
                fill
                style={{ objectFit: 'cover', zIndex: 1 }}
                quality={100}
                priority
            />

            {/* Overlay content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: '#D4D4D4',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: 2,
                }}
            >
                {/* Logo */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 6}}>
                    <Image
                        src="/FullBerryLogo.png"
                        alt="Undercoders Logo"
                        width= {1100}
                        height={900}
                        priority
                    />
                </Box>



                {/* CTA Button */}
                <Button
                    variant="outlined"
                    sx={{
                        color: '#782c4d',
                        borderWidth: "2px",
                        borderColor: '#782c4d',
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        '&:hover': {
                            backgroundColor: '#c8dae9',
                            borderColor: '#f5f7fa',
                        },
                    }}
                >
                    BECOME AN UNDERCODER
                </Button>
            </Box>
        </Box>
    );
};

export default Introduction;
