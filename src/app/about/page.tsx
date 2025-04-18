import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PillarCard from '../../../components/PillarCard';

const pillars = [
    {
        title: "Access & Exposure",
        description: "We believe coding should be for everyone...",
        image: "/access.png",
    },
    {
        title: "Representation & Empowerment",
        description: "Undercoders uplifts underrepresented voices...",
        image: "/representation.png",
    },
    {
        title: "Real-World Skills & Pathways",
        description: "We focus on hands-on, project-based learning...",
        image: "/skills.png",
    },
];

const ThreePillars = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: 4,
            }}
        >
            {pillars.map((pillar, i) => (
                <Box
                    key={i}
                    sx={{
                        flex: '1 1 calc(33.33% - 32px)',
                        minWidth: '280px',
                    }}
                >
                    <PillarCard {...pillar} />
                </Box>
            ))}
        </Box>

    );
};

export default ThreePillars;
