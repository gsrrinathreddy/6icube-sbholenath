import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {  Grid } from '@mui/material';
import DataMediaCard from '../cardComponent';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
// import QueryBuilderTwoToneIcon from '@mui/icons-material/QueryBuilderTwoTone';
// import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2, alignContent: "centre" }}>

    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
    <Box sx={{ width: '100%', typography: 'body1', alignContent:"center", alignItems:"center", border:"beige" }} centered>
      <TabContext value={value} centered>
        <Box sx={{ borderBottom: 0.5, borderColor: 'divider' }} centered>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Top" value="1"/>
            <Tab label="This Weekend" value="2" />

          </TabList>
        </Box>
        <TabPanel value="1">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
        <Grid item xs={4}>
            <DataMediaCard
            heading="The Radio Jokey Our SHAGGY - May 30"
            date="May 30, 2023"
            time="9 PM - 12 PM GMT"
            location="Rocker Club, Boolean Street, California, The United States of America"
            />
</Grid>
<Grid item xs={4}>
<DataMediaCard
            heading="Hyderabad's Biggest Weekend Theme Party"
            date="May 25, 2023"
            time="9 PM - 12 PM GMT"
            location="Terminus Pub, Botanical Street, Gachibowli, India"
            />
</Grid>

<Grid item xs={4}>
<DataMediaCard
            heading="Hot Brown Honey THE REMIX - May 28 PARTY"
            date="May 28, 2023"
            time="7 PM - 10 PM GMT"
            location="Nayagara, James Colony, Aesthetic View, Australia"
            />
</Grid>
<Grid item xs={4}>
<DataMediaCard
            heading="Hot Brown Honey THE REMIX - May 28 PARTY"
            date="May 28, 2023"
            time="7 PM - 10 PM GMT"
            location="Nayagara, James Colony, Aesthetic View, Australia"
            />
</Grid>
<Grid item xs={4}>
            <DataMediaCard
            heading="The Radio Jokey Our SHAGGY - May 30"
            date="May 30, 2023"
            time="9 PM - 12 PM GMT"
            location="Rocker Club, Boolean Street, California, The United States of America"
            />
</Grid>
           </Grid>


        </TabPanel>
        <TabPanel value="2">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
        <Grid item xs={4}>
            <DataMediaCard
            heading="The Radio Jokey Our SHAGGY - May 30"
            date="May 30, 2023"
            time="9 PM - 12 PM GMT"
            location="Rocker Club, Boolean Street, California, The United States of America"
            />
</Grid>
<Grid item xs={4}>
            <DataMediaCard
            heading="Hyderabad's Biggest Weekend Theme Party"
            date="May 25, 2023"
            time="9 PM - 12 PM GMT"
            location="Terminus Pub, Botanical Street, Gachibowli, India"
            />
</Grid>

<Grid item xs={4}>
            <DataMediaCard
            heading="Hot Brown Honey THE REMIX - May 28 PARTY"
            date="May 28, 2023"
            time="7 PM - 10 PM GMT"
            location="Nayagara, James Colony, Aesthetic View, Australia"
            />
</Grid>

           </Grid>
        
        </TabPanel>

      </TabContext>
    </Box>
    </Grid>

    </Grid>
  );
}