import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            {/* Background "Undercoders" */}
            <Typography
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '8rem', md: '20rem' },
                    color: '#264d3c',
                    fontWeight: 'bold',
                    opacity: 0.5, // soft background
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                    fontFamily: "'League Spartan', sans-serif",
                }}
            >
                UNDER
            </Typography>
            <Typography
                sx={{
                    position: 'absolute',
                    top: '25%',
                    left: '25%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '8rem', md: '20rem' },
                    color: '#5dc698',
                    fontWeight: 'bold',
                    opacity: 0.5, // soft background
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                    fontFamily: "'League Spartan', sans-serif",
                }}>
                CODERS
            </Typography>
            <Typography
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '8rem', md: '20rem' },
                    color: '#264d3c',
                    fontWeight: 'bold',
                    opacity: 0.5, // soft background
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                    fontFamily: "'League Spartan', sans-serif",
                }}
            >
                UNDER
            </Typography>
            <Typography
                sx={{
                    position: 'absolute',
                    top: '55%',
                    left: '40%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '8rem', md: '20rem' },
                    color: '#5dc698',
                    fontWeight: 'bold',
                    opacity: 0.5, // soft background
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                    fontFamily: "'League Spartan', sans-serif",
                }}>
                CODERS
            </Typography>
            <Typography
                sx={{
                    position: 'absolute',
                    top: '70%',
                    left: '45%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '8rem', md: '20rem' },
                    color: '#264d3c',
                    fontWeight: 'bold',
                    opacity: 0.5, // soft background
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                    fontFamily: "'League Spartan', sans-serif",
                }}
            >
                UNDER
            </Typography>
            <Typography
                sx={{
                    position: 'absolute',
                    top: '85%',
                    left: '55%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '8rem', md: '20rem' },
                    color: '#5dc698',
                    fontWeight: 'bold',
                    opacity: 0.5, // soft background
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                    fontFamily: "'League Spartan', sans-serif",
                }}>
                CODERS
            </Typography>
            <Typography
                sx={{
                    position: 'absolute',
                    top: '100%',
                    left: '60%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '8rem', md: '20rem' },
                    color: '#264d3c',
                    fontWeight: 'bold',
                    opacity: 0.5, // soft background
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                    fontFamily: "'League Spartan', sans-serif",
                }}>
                UNDER
            </Typography>


            {/* Scrollable foreground content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: '100%',
                    px: { xs: 2, md: 10 },
                  }}
            >
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '24px',
                        padding: { xs: 4, md: 8, lg: 12, xl: 16 },
                        maxHeight: '65vh',
                        overflowY: 'auto',
                        boxShadow: 3,
                        width: '100%',
                        maxWidth: '1000px',
                    }}
                >
                    <Typography variant="h2" fontWeight="bold" mb={3}>
                        About Us
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh at
                        facilisis pulvinar, neque turpis ultrices quam, ut sagittis justo lacus at nulla. Curabitur
                        porttitor, sapien in dapibus convallis...


                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
