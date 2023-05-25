import { Box, Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ImgMediaCard from "../../Components/homeCardComponent";
import hyd from '../../Assets/hyd.png';
import brown from '../../Assets/brown.png';
import manager from '../../Assets/manager.png'
import shaggy from '../../Assets/shaggy.png'
import LabTabs from "../../Components/tabBar";
import FourComponent from "../../Components/fourComponent";
import ReviewCardComponent from "../../Components/reviewCardComponent";
import AccordionComponent from "../../Components/AccordionComponent";
import InputComponent from "../../Components/InputComponent";

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
                            image={hyd}
                            heading="Hyderabad's Biggest Weekend Theme Party"
                            date="May 25, 2023"
                            time="9 PM - 12 PM GMT"
                            location="Terminus Pub, Botanical Street, Gachibowli, India"
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ImgMediaCard
                            image={brown}
                            heading="Hot Brown Honey THE REMIX - May 28 PARTY"
                            date="May 28, 2023"
                            time="7 PM - 10 PM GMT"
                            location="Nayagara, James Colony, Aesthetic View, Australia"
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ImgMediaCard
                            image={shaggy}
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
                        <Typography gutterBottom variant="body2" sx={{ textAlign: "justify", fontFamily: "Raleway", marginBottom: "10px", color: "text.secondary" }}>Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.</Typography>
                        <NavLink to="/Events">
                            <Button variant="contained" color="error">

                                Events Schedule

                            </Button>
                        </NavLink>
                    </Grid>

                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Box sx={{ marginLeft: "25px" }}>
                            <img src={manager} alt="e2g" />
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

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 8, alignContent: "centre", backgroundColor: "#FAFAFA" }} alignItems="center" justifyContent="center">
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom variant="h5" sx={{ textAlign: "center", color: "#FA8128", fontFamily: "Raleway" }}>TRENDING EVENTS</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Raleway", color: "text.secondary" }}>Below you'll find the schedule for Events 2023. We'll keep this page regularly updated with all new events and sessions, so be sure to keep checking in!</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <LabTabs />
                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 10, alignContent: "centre", backgroundColor: "" }} alignItems="center" justifyContent="center">
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom variant="h5" sx={{ textAlign: "center", color: "Purple", fontFamily: "Raleway" }}>DIVERSITY is our strength, we would like to bring people<br/> from all walks of life to work together</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 8, alignContent: "centre", backgroundColor: "" }} alignItems="center" justifyContent="center">
                            <Grid xs={4} sm={4} md={3} sx={{ alignContent: "center", alignItems: "center", }}>
                                <FourComponent
                                    title="Free Events"
                                    description="Standard Fee Applicable"
                                />
                            </Grid>
                            <Grid xs={4} sm={4} md={3} sx={{ alignContent: "center", alignItems: "center" }}>
                                <FourComponent
                                    title="Standard"
                                    description="5% + $1.00 &amp "
                                    description1="Per paid ticket"
                                />
                            </Grid>
                            <Grid xs={4} sm={4} md={3} sx={{ alignContent: "center", alignItems: "center" }}>
                                <FourComponent
                                    title="Charities"
                                    description="2.5% + $0.50"
                                    description1="Per paid ticket"
                                />
                            </Grid>
                            <Grid xs={4} sm={4} md={3} sx={{ alignContent: "center", alignItems: "center" }}>
                                <FourComponent
                                    title="Thinking big?"
                                    description="Let's Talk."
                                    button="Contact US"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom color= "text.secondary" variant="body1" sx={{textAlign:"center"}}>All plans include access to all features. Technology, Pricing, Customer Service, and Support will be provided.</Typography>
                        <Typography color="Green" variant="h6" sx={{textAlign:"center"}}>Quality Service and Customer first.</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 8, alignContent: "centre", backgroundColor: "#F8F8FF" }} alignItems="center" justifyContent="center">
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom variant="h4" sx={{ textAlign: "center", color: "#FA8128", fontFamily: "Raleway" }}>Our Reviews, Latest News & Articles</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Raleway", color: "text.secondary" }}>Events 2023 gathered the brightest minds globally. Explore new skills and attributes <br/>from our experts and practitioners.</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center", p:6 }}>  
                        <ReviewCardComponent
                        title1="Posted on"
                        title2="May 18, 2023"
                        head="Eventer..."
                        image="http://buzzitsolutions.com/events/uploads/blog/post/devim_1335223258.png"
                        description="Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida donec ipsum,"
                        button="More Details"
                        />
                    </Grid>
                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center", p:6 }}>  
                        <ReviewCardComponent
                        title1="Posted on"
                        title2="May 18, 2023"
                        head="First Speakers..."
                        image="http://buzzitsolutions.com/events/uploads/blog/post/devim_854574434.jpg"
                        description="Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida donec ipsum,"
                        button="More Details"
                        />
                    </Grid>
                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center", p:6 }}>  
                        <ReviewCardComponent
                        title1="Posted on"
                        title2="May 17, 2023"
                        head="Eventer..."
                        image="http://buzzitsolutions.com/events/uploads/blog/post/devim_2057839072.jpg"
                        description="Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida donec ipsum,"
                        button="More Details"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 8, alignContent: "centre", backgroundColor: "" }} alignItems="center" justifyContent="center">
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography color= "Green" gutterBottom variant="h4" sx={{ textAlign: "center", fontFamily: "Raleway" }}>Have Questions? Look Here.</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Raleway", color: "text.secondary" }}>Events 2023 gathered the brightest minds in the tech world. Learn new skills and get insights<br/> from experts and practitioners from all around!</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={2} sx={{ alignContent: "center", alignItems: "center" }}>
                        
                    </Grid>
                    <Grid xs={4} sm={4} md={8} sx={{ alignContent: "center", alignItems: "center" }}>
                        <AccordionComponent/>
                    </Grid>
                    <Grid xs={4} sm={4} md={2} sx={{ alignContent: "center", alignItems: "center" }}>
                        
                        </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 8, alignContent: "centre", backgroundColor: "#FAFAFA" }} alignItems="center" justifyContent="center">
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom variant="h4" sx={{ textAlign: "center", color: "#FA8128", fontFamily: "Raleway" }}>Keep upto date with events</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Raleway", color: "text" }}>Events 2023 gathered the brightest minds globally. Explore new skills and attributes<br/> from our experts and practitioners.</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center", p:2 }}>  
                       <InputComponent/>
                    </Grid>
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography sx={{ textAlign: "center", marginBottom: "5px", fontFamily: "Raleway", color: "text.secondary" }}>We don’t share your personal information with anyone. Check out our</Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Typography gutterBottom sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Raleway", color: "text.secondary" }}><NavLink to="/">Privacy Policy</NavLink> | <NavLink to="/">Terms Of Use</NavLink>  for more information.</Typography>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}