"use client";

import { useRouter } from "next/router";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

// TEMPORARY STATIC DATA
const programData = {
  access: {
    title: "Access & Exposure",
    image: "/access.png",
    content: `Undercoders is grounded in the belief that every student—regardless of background—should have the opportunity to explore technology. This program introduces coding through interactive projects, mentorship, and community events aimed at breaking down intimidation and gatekeeping in tech.`,
  },
  representation: {
    title: "Representation & Empowerment",
    image: "/representation.png",
    content: `We don't just want diversity at the table—we want leadership. This program encourages identity pride, helps students gain public speaking skills, and fosters resilience in environments where they may be underrepresented. It's about rewriting the narrative with action.`,
  },
  skills: {
    title: "Real-World Skills & Pathways",
    image: "/skills.png",
    content: `Theoretical knowledge is only part of the journey. This program equips Undercoders with hands-on experiences including group projects, GitHub workshops, and mock interviews. The goal? Graduate with a portfolio and confidence—not just class hours.`,
  },
};

const ProgramDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") return null;

  const key = slug.toLowerCase();
  const program = programData[key as keyof typeof programData];

  if (!program) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold">
          Program Not Found
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Sorry, we couldn’t find the program you’re looking for.
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 10 } }}>
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          backgroundColor: "#f9f9f9",
          borderRadius: "16px",
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", height: { xs: 240, md: 400 } }}>
          <Image
            src={program.image}
            alt={program.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ p: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontFamily: "'League Spartan', sans-serif",
              color: "#0d2c52",
              mb: 3,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            {program.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            {program.content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgramDetail;
