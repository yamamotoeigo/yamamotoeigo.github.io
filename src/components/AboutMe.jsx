import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <Box
      id="aboutme"
      className="AboutMe"
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        ひとこと
      </Typography>
      <Typography variant="body1">
        ネットワークxAIの領域で研究をしています. <br />
        最近はネットワークとかインフラ周りが楽しいなという気持ちです. <br />
        下手くそながらゲームや音楽が趣味です.
      </Typography>
    </Box>
  );
}

export default AboutMe;
