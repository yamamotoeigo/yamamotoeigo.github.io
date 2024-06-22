import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Code from '@mui/icons-material/Code';
import GitIcon from '@mui/icons-material/GitHub';
import DockerIcon from '@mui/icons-material/Cloud';
import LinuxIcon from '@mui/icons-material/Terminal';
import NetworkIcon from '@mui/icons-material/Router';
import HandymanIcon from '@mui/icons-material/Handyman';
import '../styles/TechStack.css';

const TechStack = () => {
  const techs = [
    { name: 'Python', rating: 5, use: '研究, Webアプリ, socket, 競プロ, 機械学習周り', icon: <Code /> },
    { name: 'Java', rating: 4, use: '講義の実習にて使用, OOPの学習やGUIアプリの作成', icon: <Code /> },
    { name: 'JavaScript (React)', rating: 3, use: '簡単なフロントエンド開発', icon: <Code /> },
    { name: 'Go', rating: 2, use: 'ネットワークのシミュレーションなどで使用', icon: <Code /> },
    { name: 'Git', rating: 3, use: '基本的な操作は可能です.', icon: <GitIcon /> },
    { name: 'Docker', rating: 3, use: '基本的な操作は可能です.', icon: <DockerIcon /> },
    { name: 'Linux', rating: 3, use: '基本的なセットアップ(web, DNS, mail)経験があります.', icon: <LinuxIcon /> },
    { name: 'ネットワーク', rating: 3, use: 'VPNの構築, 現在IaCの学習中です.', icon: <NetworkIcon /> },
    { name: 'ChatGPT', rating: 5, use: '日常的に愛用しています', icon: <HandymanIcon /> },
  ];

  return (
    <Box id="techstack" className="TechStack" sx={{ padding: 2 }}>
      <Typography variant="h4" component="h2">
        スキル
      </Typography>
      <Grid container spacing={2}>
        {techs.map((tech, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ marginRight: 2 }}>
                {tech.icon}
              </Box>
              <Box>
                <Typography variant="h6">{tech.name}</Typography>
                <Rating value={tech.rating} readOnly />
                <Typography variant="body2" color="text.secondary">
                  {tech.use}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TechStack;
