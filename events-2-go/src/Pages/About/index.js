import { Box, Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import FeatureComponent from "../../Components/FeaturesComponent";



// import about from '../../Assets/about.jpg'
// import people from '../../Assets/people.jpg'

export default function LandingPage() {

    const heroStyle = {
        minHeight: '25vh',
        // marginLeft: '10px',
        marginTop: '60px',
        backgroundImage: 'url(http://events2go.com.au/assets/front/images/blog-page.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    };

    const heroTextStyle = {

        textAlign: 'left',
        marginLeft: '20px',
        marginTop: '30px',
        textShadow: '1px 1px 2px #000'
    };

    // const actionButtonStyle = {
    //     margin: '16px',
    // };


    return (
        <>
            <div>

                <Grid container style={heroStyle}>
                    <Grid item xs={12}>
                        <div style={heroTextStyle}>

                            <Typography sx={{ letterSpacing: 6, m: 1 }} variant="h4" color="white" fontFamily="raleway">About Us</Typography>

                        </div>

                    </Grid>
                </Grid>



                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 8, alignContent: "centre", backgroundColor:"#FAFAFA" }} alignItems="center" justifyContent="center">
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
                            <img src="http://events2go.com.au/assets/front/images/image-06.png" width="90%" alt="e2g" />
                        </Box>
                    </Grid>
                    <Grid xs={2} sm={2} md={2}>

                    </Grid>
                </Grid>


                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 8, alignContent: "centre", backgroundColor:"" }} alignItems="center" justifyContent="center">

                    <Grid xs={4} sm={4} md={6} sx={{ alignContent: "center", alignItems: "center" }}>
                        <Box sx={{ marginLeft: "25px" }}>
                            <img src="http://events2go.com.au/assets/front/images/info-1.jpg" width="95%" height="auto" alt="e2g" />
                        </Box>
                    </Grid>
                    <Grid xs={4} sm={4} md={6} sx={{ alignContent: "center", alignItems: "center", marginLeft:"" }}>
                        <Typography gutterBottom variant="h5" sx={{ color: "#FA8128" }}>Why Events2go is essential for Corporates, Governments and Not-for-profit sectors?</Typography>
                       
                        <Typography gutterBottom variant="body1" sx={{ textAlign: "justify", fontFamily: "Raleway", marginBottom:"10px", color: "text.secondary" }}> ✔ Remotely working Employee well-being has become crucial in terms of productivity and hence online engagement is the only game changer to identify employee well-being and performance management.</Typography>
                        <Typography gutterBottom variant="body1" sx={{ textAlign: "justify", fontFamily: "Raleway", color: "text.secondary", marginBottom:"10px" }}> ✔ Not-for-profits often find it difficult to organise webinars, online charity and fundraising events due to limited IT resources and financial requirements.</Typography>
                        <Typography gutterBottom variant="body1" sx={{ textAlign: "justify", fontFamily: "Raleway", color: "text.secondary", marginBottom:"10px" }}> ✔ Organising events more efficiently and effectively through monitoring mechanism that registers the RSVPs, feedback and issuing ticketing</Typography>
                    </Grid>
                </Grid>




                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 6, alignContent: "centre", backgroundColor: "#F8F8FF" }} alignItems="center" justifyContent="center">
                    <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
                    <Typography variant="h4" align="center" fontFamily="Raleway" color="Green" gutterBottom>
                Key Features
                    </Typography>
                    </Grid>
                    <Grid xs={4} sm={4} md={2} sx={{ alignContent: "center", alignItems: "center" }}>
                        
                        </Grid>
                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
                        <FeatureComponent
                        head="Networking & Lead Capture"
                        des1="● Seamless contact exchange between attendees through QR scanning"
                        des2="● Allow attendees to search for users, ‘favourite’ their contacts, and export contact lists"
                        des3="● Connect attendees through Events2go in-App chat & meeting booking tools"
                        des4="● Helps attendees find exhibitors through an interactive floor map"
                        des5="● Host a live feed of the goings-on in your event or seek feedback instantly"
                        />
                        
                    </Grid>
                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
                        <FeatureComponent
                        head="Promotion, Branding and Sponsorship"
                        des1="● Create white-labelled apps featuring your custom branding"
                        des2="● Sell spaces within your app’s virtual exhibit hall"
                        des3="● Offer full-page splash ads to increase sponsor visibility"
                        des4="● Set up rolling banner ads throughout the mobile app"
                        des5="● Set up a sponsor’s page to increase logo visibility"
                        />
                        
                    </Grid>

                    <Grid xs={4} sm={4} md={2} sx={{ alignContent: "center", alignItems: "center" }}>
                        
                        </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 4, alignContent: "centre", backgroundColor: "#F8F8FF" }} alignItems="center" justifyContent="center">
                    <Grid xs={4} sm={4} md={2} sx={{ alignContent: "center", alignItems: "center" }}>
                        
                        </Grid>
                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
                        <FeatureComponent
                        head="Easy Event creation for the purposes of Registration & Check-in"
                        des1="● Helps in developing custom registration forms"
                        des2="● Secure important attendee information"
                        des3="● Generates QR codes for quick scanning and onsite check-ins"
                        des4="● Assist people with the option to self-check in within the app"
                        des5="● Easily track attendance rates in real-time"
                        />
                        
                    </Grid>
                    <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
                        <FeatureComponent
                        head="Engagement"
                        des1="● Accessible Live streaming or virtual presentations through Events2go App"
                        des2="● Businesses can gain more visibility through Events2go in-App exhibit booths"
                        des3="● Publish multimedia content for easy download"
                        des4="● Set up live polls, Q&A sessions and leader-boards for attendees"
                        des5="● Display job boards and product listings"
                        />
                        
                    </Grid>

                    <Grid xs={4} sm={4} md={2} sx={{ alignContent: "center", alignItems: "center" }}>
                        
                        </Grid>
                </Grid>

            </div>
        </>
    )
}