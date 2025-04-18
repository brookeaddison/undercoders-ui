"use client";


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';


const Navbar = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#0E2A51',
                boxShadow: 'none',
                height: '15vh',
                justifyContent: 'center',
            }}
        >
            <Toolbar
                sx={{
                    height: '100%',
                    px: 6,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {/* Logo Only */}
                <Link href="/" passHref style={{ textDecoration: 'none' }}>
                    <Box
                        sx={{
                            height: '100%', // inherits from Toolbar
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box sx={{ height: '70%', width: 'auto' }}>
                            <Image
                                src="/transparenticon.png"
                                alt="Undercoders Logo"
                                width={100}
                                height={100}
                                style={{ height: '100%', width: 'auto' }}
                                priority
                            />
                        </Box>

                    </Box>
                </Link>


                {/* Large Horizontal Navigation */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 20,
                        pr: 15, // This adds right padding equal to 48px (6 * 8px)
                    }}
                >
                    <Link href="/programs" passHref>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '2rem',
                                color: '#D4D4D4',
                                textDecoration: 'none',
                                '&:hover': {
                                    borderBottom: '3px solid #D4D4D4',
                                },
                            }}
                        >
                            Programs
                        </Typography>
                    </Link>

                    <Link href="/blog" passHref>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '2rem',
                                color: '#D4D4D4',
                                textDecoration: 'none',
                                '&:hover': {
                                    borderBottom: '3px solid #D4D4D4',
                                },
                            }}
                        >
                            Blog
                        </Typography>
                    </Link>

                    <Link href="/about" passHref>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '2rem',
                                color: '#D4D4D4',
                                textDecoration: 'none',
                                '&:hover': {
                                    borderBottom: '3px solid #D4D4D4',
                                },
                            }}
                        >
                            About
                        </Typography>
                    </Link>

                    <Link href="/connect" passHref>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '2rem',
                                color: '#D4D4D4',
                                textDecoration: 'none',
                                '&:hover': {
                                    borderBottom: '3px solid #D4D4D4',
                                },
                            }}
                        >
                            Connect
                        </Typography>
                    </Link>
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
