import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <Box className="Footer" sx={{ padding: 2, borderTop: '1px solid #ccc', textAlign: 'center', marginTop: 2 }}>
      <Typography variant="body2" color="text.secondary">
        &copy; 2024 Yamamoto Eigo
      </Typography>
    </Box>
  );
}

export default Footer;
