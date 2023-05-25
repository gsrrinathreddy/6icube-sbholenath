import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import QueryBuilderTwoToneIcon from '@mui/icons-material/QueryBuilderTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

export default function DataMediaCard(props) {

    
    const heading = props.heading;
    const date = props.date;
    const time = props.time;
    const location = props.location;

    return (

        <Card sx={{ maxWidth: 345 }}>

            <CardContent>
                <Typography variant="h6" component="div" sx={{fontFamily:"Raleway"}}>
                    {heading}
                    {/* Hyderabad's Biggest Weekend Theme Party */}
                </Typography>
                {/* <Typography variant="subtitle2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
            </CardContent>
            <CardActions>
                <CalendarMonthTwoToneIcon color="secondary"/>
                <Typography variant="subtitle2" color="text.secondary" marginLeft="10px">
                    {date}
                    {/* May 25, 2023 */}
                </Typography>
            </CardActions>
            <CardActions>
                <QueryBuilderTwoToneIcon color="primary"/>
                <Typography variant="subtitle2" color="text.secondary" marginLeft="10px">
                    {time}
                    {/* 9 PM - 12 PM GMT */}
                </Typography>
            </CardActions>
            <CardActions>
                <LocationOnTwoToneIcon color="error"/>
                <Typography variant="subtitle2" color="text.secondary" marginLeft="10px">
                    {location}
                    {/* Terminus Pub, Botanical Street, Gachibowli, Hyderabad */}
                </Typography>
            </CardActions>
        </Card>
      
    );
}