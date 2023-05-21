import { Box, Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ImgMediaCard from "../../Components/homeCardComponent";
// import people from '../../Assets/people.jpg'

export default function LandingPage() {

    const heroStyle = {
        minHeight: '100vh',
        // marginLeft: '10px',
        marginTop: '0px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    };

    const heroTextStyle = {

        textAlign: 'center',
        textShadow: '1px 1px 2px #000'
    };

    const actionButtonStyle = {
        margin: '16px',
    };

    return (
        <>
            <div>
                <Grid container style={heroStyle}>
                    <Grid item xs={12}>
                        <div style={heroTextStyle}>
                            <Typography variant="h2"
                                sx={{ color: "#1338BE", fontFamily: "raleway", marginBottom: "1px" }}
                            >Event Manager App
                            </Typography>
                            <Typography variant="h3"
                                sx={{ color: "#FA8128", fontFamily: "raleway", marginBottom: "10px" }}
                            >Go Kangaroos... your appetite<br /> starts here!
                            </Typography>
                            {/* <Typography variant="h5" color="white" fontFamily="raleway">All your Events schedule in Events2go</Typography> */}

                            <Typography variant="h5" color="white" fontFamily="raleway">Creative, Engaged, Well-connected, Self-promoting
                                and Reporting Event Organiser!</Typography>
                            <NavLink to="/Events">
                                <Button variant="contained" color="secondary" style={actionButtonStyle}>

                                    Events Schedule

                                </Button>
                            </NavLink>
                        </div>

                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 16 }}>

                    <Grid item xs={4}>
                        <ImgMediaCard
                            image="http://buzzitsolutions.com/events/uploads/upcomingevents/_upcoming_1684239743.png"
                            heading="Hyderabad's Biggest Weekend Theme Party"
                            date="May 25, 2023"
                            time="9 PM - 12 PM GMT"
                            location="Terminus Pub, Botanical Street, Gachibowli, India"
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ImgMediaCard
                            image="http://buzzitsolutions.com/events/uploads/upcomingevents/_upcoming_1684472297.png"
                            heading="Hot Brown Honey THE REMIX - May 28 PARTY"
                            date="May 28, 2023"
                            time="7 PM - 10 PM GMT"
                            location="Nayagara, James Colony, Aesthetic View, Australia"
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ImgMediaCard
                            image="http://buzzitsolutions.com/events/uploads/upcomingevents/_upcoming_1684239374.png"
                            heading="The Radio Jokey Our SHAGGY - May 30"
                            date="May 30, 2023"
                            time="9 PM - 12 PM GMT"
                            location="Rocker Club, Boolean Street, California, The United States of America"
                        />
                    </Grid>
                </Grid>


                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2, alignContent: "centre" }} alignItems="center" justifyContent="center">
                    <Grid xs={2} sm={2} md={2}>

                    </Grid>
                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography variant="h6" sx={{ color: "#1338BE" }}>ABOUT THE EVENTS2GO [ EVENTS MANAGER ]</Typography>
                        <Typography gutterBottom variant="subtitle1" sx={{ color: "green" }}>Welcome to Events2go - Event Manager</Typography>
                        <Typography gutterBottom variant="body2" sx={{ textAlign: "justify", fontFamily: "Raleway", marginBottom: "10px" }}>Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.</Typography>
                        <NavLink to="/Events">
                            <Button variant="contained" color="error">

                                Events Schedule

                            </Button>
                        </NavLink>
                    </Grid>

                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Box sx={{ marginLeft: "25px" }}>
                            <img src="http://buzzitsolutions.com/events/assets/front/images/image-02.png" alt="e2g" />
                        </Box>
                    </Grid>
                    <Grid xs={2} sm={2} md={2}>

                    </Grid>
                </Grid>


                {/* <Grid container >
                <Grid item xs={12}>
                <Typography variant="h5" sx={{alignContent:"center", alignItems:"center"}}>Creative, Engaged, Well-connected, Self-promoting and Reporting Event Organiser!</Typography>
                </Grid>
                
                <Grid item xs={6} md={12}>

<img src={people} width="100%" height="100%"/>

                </Grid>
                
            </Grid> */}

            </div>
        </>
    )
}