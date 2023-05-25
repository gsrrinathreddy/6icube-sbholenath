import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FeatureComponent(props) {
    const head=props.head;
    const des1=props.des1;
    const des2=props.des2;
    const des3=props.des3;
    const des4=props.des4;
    const des5=props.des5;
  return (
    <Card sx={{ maxWidth: 440, minHeight:345 }}>
      <CardActionArea>
        <CardContent>
          <Typography color="#594173" sx={{marginBottom:"20px", fontFamily:""}} gutterBottom variant="h5" component="div">
            {head}
          </Typography>
          <Typography fontFamily="Raleway" gutterBottom variant="body1" color="text.secondary">
            {des1}
          </Typography>
          <Typography fontFamily="Raleway" gutterBottom variant="body1" color="text.secondary">
            {des2}
          </Typography>
          <Typography fontFamily="Raleway" gutterBottom variant="body1" color="text.secondary">
            {des3}
          </Typography>
          <Typography fontFamily="Raleway" gutterBottom variant="body1" color="text.secondary">
            {des4}
          </Typography>
          <Typography fontFamily="Raleway" gutterBottom variant="body1" color="text.secondary">
            {des5}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}