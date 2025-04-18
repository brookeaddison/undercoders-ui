import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface PillarCardProps {
  title: string;
  description: string;
  image: string;
}

const PillarCard = ({ title, description, image }: PillarCardProps) => {
  return (
    <Box
      sx={{
        border: '2px solid #ccc',
        borderRadius: '16px',
        padding: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ width: '100%', height: 150, position: 'relative', mb: 2 }}>
        <Image src={image} alt={title} fill style={{ objectFit: 'contain' }} />
      </Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
};

export default PillarCard;
