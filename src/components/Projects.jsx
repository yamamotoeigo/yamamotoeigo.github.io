import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';
import '../styles/Projects.css';
import projectData from '../data/projectData';

// const projectData = [
//     // ここに新しいプロジェクトを追加できます
//   {
//     name: 'IEEE GCCE 2023 にて研究発表',
//     description: '学部4年時に分散深層学習に関する研究で国際会議にて発表',
//     technologies: 'Python, Numpy, PyTorch',
//     details: `
//         この研究は, 分散深層学習に関するもので, PythonとPyTorchを使用して実装しました.
//         地理的に分散したデータセンターやクラスタを用いる環境での分散学習に関する手法の考察を行いました.
//         論文リンク: https://ieeexplore.ieee.org/document/10315304
//     `,
//     images: ['../assets/images/gcce.jpg','../assets/images/gcce.jpg'],
//     demo: 'https://demo-url.com',
//     link: 'https://github.com/yamamotoeigo/consideration_of_computer_power',
//   },
//   {
//     name: 'リアルタイム映像解析システム',
//     description: '近畿大学オープンキャンパスにて所属研究室のブースで展示',
//     technologies: 'Python, Flask, Yolo, OpenCV',
//     details: `
//         このプロジェクトは, 近畿大学のオープンキャンパスにて展示したリアルタイム映像解析システムです.
//         PythonのFlaskフレームワークを使用してWebアプリケーションとして実装し、YoloとOpenCVを用いて映像解析を行いました.
//         展示では, カメラで撮影した映像を解析し, 検出した人数により検出モデルを切り替えるシステムです.
//     `,
//     images: ['../assets/images/realtime_demo.png', '../assets/images/realtime.png'],
//     demo: 'https://demo-url.com',
//     link: 'https://github.com/yamamotoeigo/KD2023-OpenCampus',
//   },
//   {
//     name: 'リアルタイム映像解析システム',
//     description: '近畿大学オープンキャンパスにて所属研究室のブースで展示',
//     technologies: 'Python, Flask, Yolo, OpenCV',
//     details: `
//         このプロジェクトは, 近畿大学のオープンキャンパスにて展示したリアルタイム映像解析システムです.
//         PythonのFlaskフレームワークを使用してWebアプリケーションとして実装し、YoloとOpenCVを用いて映像解析を行いました.
//         展示では, カメラで撮影した映像を解析し, 検出した人数により検出モデルを切り替えるシステムです.
//     `,
//     images: ['../assets/images/realtime_demo.png', '../assets/images/realtime.png'],
//     demo: 'https://demo-url.com',
//     link: 'https://github.com/yamamotoeigo/KD2023-OpenCampus',
//   },
// ];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <Box id="projects" className="Projects" sx={{ padding: 2 }}>
      <Typography variant="h4" component="h2">
        成果物
      </Typography>
      <Grid container spacing={2}>
        {projectData.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ProjectCard
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              onClick={() => handleOpenDialog(project)}
            />
          </Grid>
        ))}
      </Grid>
      {selectedProject && (
        <ProjectDialog
          open={Boolean(selectedProject)}
          onClose={handleCloseDialog}
          project={selectedProject}
        />
      )}
    </Box>
  );
}

export default Projects;
