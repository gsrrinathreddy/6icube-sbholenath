import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box bgcolor="#FFFFFF" color="text.secondary" py={4}>
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{fontFamily:"Raleway"}} color="secondary" variant="h6">About Us</Typography>
            <Typography sx={{fontFamily:"Raleway"}} variant="body2">
            Creative, Engaged, Well-connected, Self-promoting
and Reporting Event Organiser by experts and practitioners!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{fontFamily:"Raleway"}} color="secondary" variant="h6">Contact Us</Typography>
            <Typography sx={{fontFamily:"Raleway"}} variant="body2">
              Email: events2go@gmail.com
              <br />
              Phone: +61 431 622 292
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{fontFamily:"Raleway"}} color="secondary" variant="h6">Follow Us</Typography>
            <Typography sx={{fontFamily:"Raleway"}} variant="body2">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <br />
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{fontFamily:"Raleway"}} color="secondary" variant="h6">Address</Typography>
            <Typography sx={{fontFamily:"Raleway"}} variant="body2">
            48 Cameron St,
              <br />
              Doonside NSW 2767
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;