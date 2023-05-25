import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ReviewCardComponent(props) {

        const title1=props.title1;
        const title2=props.title2;
        const image=props.image;
        const description=props.description;
        const button=props.button;
        const head=props.head;

  return (

    <Card sx={{ maxWidth: 345 }}>
        
    <CardActions>
    <Typography sx={{fontFamily:"Raleway"}}>{title1}</Typography>
    <Typography sx={{fontFamily:"Raleway"}} color="green">{title2}</Typography>
    
      </CardActions>
      <Typography gutterBottom variant="h6" sx={{marginLeft:"7px", fontFamily:"Raleway"}}>{head}</Typography>
    
      <CardMedia
      
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" variant='outlined' size="small">{button}</Button> 
      </CardActions>
    </Card>

  );
}