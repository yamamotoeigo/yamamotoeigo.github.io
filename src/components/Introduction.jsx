import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import '../styles/Introduction.css';

const Introduction = () => {
  return (
    <Box id="introduction" className="Introduction" sx={{ padding: 2, textAlign: 'center' }}>
      <Avatar
        alt="アイコン"
        src="../assets/images/icon.png"
        sx={{ width: 180, height: 180, margin: '0 auto 20px' }}
      />
      <Typography variant="h4" component="h2">
        自己紹介
      </Typography>
      <Typography variant="body1">
        名前: Yamamoto Eigo
      </Typography>
      <Typography variant="body1">
        所属: 近畿大学大学院 総合理工学研究科
      </Typography>
      <Typography variant="body1">
        研究室: <Link href="https://www.mizlab.net/" target="_blank" rel="noopener noreferrer" underline="hover">大規模情報処理システム研究室</Link>
      </Typography>
      <Typography variant="body1">
        学年: 修士1年
      </Typography>
    </Box>
  );
}

export default Introduction;
