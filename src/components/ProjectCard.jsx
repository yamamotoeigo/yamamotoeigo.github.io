import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import GitIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({ name, description, technologies, link, onClick }) => {
  return (
    <Card onClick={onClick} style={{ cursor: 'pointer' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          概要: {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          使用技術: {technologies}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank" rel="noopener noreferrer">
            GitHub<GitIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
