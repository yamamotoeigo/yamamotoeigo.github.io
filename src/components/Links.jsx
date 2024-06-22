import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import '../styles/Links.css';

const Links = () => {
  return (
    <Box id="links" className="Links" sx={{ padding: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        各種リンク
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link href="https://x.com/YamamotoD3v" target="_blank" rel="noopener noreferrer" underline="hover">
            X(旧Twitter)
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://github.com/yamamotoeigo" target="_blank" rel="noopener noreferrer" underline="hover">
            GitHub
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://zenn.dev/yama_moto" target="_blank" rel="noopener noreferrer" underline="hover">
            Zenn
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://speakerdeck.com/yamamotoeigo" target="_blank" rel="noopener noreferrer" underline="hover">
            Speaker Deck
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Links;
