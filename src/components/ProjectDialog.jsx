import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../styles/ProjectDialog.css';

const ProjectDialog = ({ open, onClose, project }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  const formattedDetails = project.details.split('\n').map((str, index) => (
    <Typography key={index} variant="body2" color="text.primary">
      {str}
      <br />
    </Typography>
  ));

  const handlePrev = () => {
    if (swiperRef) swiperRef.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{project.name}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          {project.description}
        </Typography>
        <Typography variant="body2" color="text.primary">
          使用技術: {project.technologies}
        </Typography>
        {formattedDetails}
        <Swiper
          onSwiper={setSwiperRef}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="project-slider"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`${project.name} - ${index + 1}`} className="project-image" />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="navigation-buttons">
          <Button onClick={handlePrev} color="primary">前へ</Button>
          <Button onClick={handleNext} color="primary">次へ</Button>
        </div> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">閉じる</Button>
        {/* {project.demo && (
          <Button href={project.demo} target="_blank" rel="noopener noreferrer" color="primary">
            Demo
          </Button>
        )} */}
        {/* <Button href={project.link} target="_blank" rel="noopener noreferrer" color="primary">
          GitHub
        </Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDialog;
