"use client";

import { Box, Typography, useMediaQuery, useTheme, keyframes, Button } from "@mui/material";
import Image from "next/image";

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ConnectPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                height: "100vh",
                width: "100%",
            }}
        >
            {/* Left Image */}
            <Box
                sx={{
                    flex: 1,
                    position: "relative",
                    minHeight: { xs: "40vh", md: "100vh" },
                    height: "100%", // ✅ ensure it fills vertically
                   
                }}
            >
                <Image
                    src="/connect.png"
                    alt=""
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                    priority
                />
            </Box>


            {/* Right Content */}
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: "#0E2A51",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: { xs: 4, md: 10 },
                }}
            >
                <Box
                    sx={{
                        animation: `${fadeInLeft} 1.2s ease-out`,
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography
                        variant="h1"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "'League Spartan', sans-serif",
                            color: "#e5e7eb",
                            mb: 2,
                        }}
                    >
                        UNDERCODERS...
                    </Typography>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "'League Spartan', sans-serif",
                            color: "#fff",
                            mb: 2,
                        }}
                    >
                        Let's Connect
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#D4D4D4", maxWidth: "500px" }}>
                        Have questions? Interested in becoming an Undercoder? We'd love to hear from you.
                        Reach out and let's build something great together.
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            color: "#e5e7eb",
                            borderColor: "#e5e7eb",
                            borderWidth: 2,
                            mt: 5,
                            px: 4,
                            py: 1,
                            fontWeight: "bold",
                            fontSize: 20,
                            borderRadius: "25px",
                            textTransform: "none",
                            "&:hover": {
                                color: "#0E2A51",
                                backgroundColor: "#abc1e0", // subtle hover effect
                                borderColor: "#021f66",
                                borderWidth: 2,
                            },
                        }}
                    >
                        Connect
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ConnectPage;
