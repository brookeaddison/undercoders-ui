"use client";

import { Box, Typography, Link } from "@mui/material";

const SiteFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(63deg, rgba(13, 44, 82, 1) 0%, rgba(147, 169, 190, 1) 72%, rgba(200, 218, 233, 1) 100%)",
        color: "#fff",
        py: 6,
        px: { xs: 4, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        gap: 4,
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Undercoders. All rights reserved.
      </Typography>

      <Box sx={{ display: "flex", gap: 3 }}>
        <Link href="/about" underline="hover" color="inherit">
          About
        </Link>
        <Link href="/programs" underline="hover" color="inherit">
          Programs
        </Link>
        <Link href="/connect" underline="hover" color="inherit">
          Connect
        </Link>
      </Box>
    </Box>
  );
};

export default SiteFooter;
