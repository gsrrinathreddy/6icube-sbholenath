import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function BasicCard(props) {
    const title = props.title;
const description = props.description;
const description1 = props.description1;
const button = props.button;
  return (
    <Card sx={{ maxWidth: 290, minHeight: 160, backgroundColor:"FFFFFF" }}>
      <CardContent>

        <Typography color="error" gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
        {title}
        </Typography>
        <Typography sx={{ mb: 1.5, textAlign:"center" }} color="text.secondary">
        {description}
        </Typography>
        <Typography sx={{ textAlign:"center" }} color="text.secondary">
        {description1}
        </Typography>
        <NavLink to="/Contact">
        <Button sx={{marginLeft:"30%"}}>{button}</Button>
        </NavLink>
      </CardContent>

    </Card>
  );
}