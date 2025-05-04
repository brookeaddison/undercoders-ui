"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

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
        {/* Logo */}
        <Link href="/" passHref style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              height: '100%',
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

        {/* Mobile Drawer */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon sx={{ fontSize: '2.5rem', color: '#D4D4D4' }} />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                sx={{ width: 250, px: 2, py: 4 }}
                role="presentation"
                onClick={() => setDrawerOpen(false)}
                onKeyDown={() => setDrawerOpen(false)}
              >
                <List>
                  {['Programs', 'Blog', 'About', 'Connect'].map((text) => (
                    <ListItem key={text} disablePadding>
                      <Link href={`/${text.toLowerCase()}`} passHref legacyBehavior>
                        <ListItemButton component="a" sx={{
                          '&:hover': {
                            backgroundColor: '#f0f0f0',
                          },
                        }}>
                          <ListItemText
                            primary={text}
                            primaryTypographyProps={{
                              fontSize: '1.5rem',
                              fontFamily: "'League Spartan', sans-serif",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              pr: 15,
            }}
          >
            {['Programs', 'Blog', 'About', 'Connect'].map((text) => (
              <Link key={text} href={`/${text.toLowerCase()}`} passHref>
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
                  {text}
                </Typography>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
