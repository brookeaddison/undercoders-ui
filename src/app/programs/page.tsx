import React from 'react';
import { Box, Typography } from '@mui/material';
import HoverCard from '../../../components/HoverCard';

const pillars = [
    {
        title: "Access & Exposure",
        description:
            "We believe coding should be for everyone, not just those who can afford exclusive bootcamps or navigate legacy pipelines. Undercoders creates accessible entry points into tech through after-school programs and summer intensives — no previous experience required. By demystifying programming and offering exposure to real tools and real projects, we give students a chance to discover their potential early, without gatekeeping or prerequisites.",
        image: "/access.png",
        borderColor: "#f46036", // orange
        slug: "access",
    },
    {
        title: "Representation & Empowerment",
        description:
            "Undercoders uplifts underrepresented voices not through quotas, but through skill development, leadership opportunities, and community. We reject surface-level diversity optics in favor of true empowerment — making sure every participant, regardless of background, has the resources and mentorship to succeed based on merit. Our philosophy centers on showing what’s possible when you bet on people and back them with real tools.",
        image: "/representation.png",
        borderColor: "#5ec5c3", // teal
        slug: "representation",
    },
    {
        title: "Real-World Skills & Pathways",
        description:
            "We focus on hands-on, project-based learning that reflects what the industry actually demands. From building websites and dashboards to developing APIs and security features, our participants graduate with real repositories, portfolios, and confidence. Whether they pursue internships, higher education, or launch their own startups, Undercoders ensures they’re equipped not just to compete, but to lead.",
        image: "/skills.png",
        borderColor: "#6a4c93", // purple
        slug: "skills",
    },
];

const ProgramCards = () => {
    return (

        <Box sx={{ px: { xs: 2, md: 10 }, py: 10 }}>
            <Typography
                variant="h1"
                sx={{
                    fontWeight: "bold",
                    fontFamily: "'League Spartan', sans-serif",
                    letterSpacing: "1.5rem",
                    mb: 6,
                    textAlign: "center",
                    color: "#0d2c52",
                    border: 10,
                    padding: 5,
                    borderRadius: 25,
                }}
            >
                PROGRAMS
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {pillars.map((post, index) => (
                    <HoverCard key={index} post={post} index={index} />

                ))}
            </Box>
        </Box>
    );
};

export default ProgramCards;
