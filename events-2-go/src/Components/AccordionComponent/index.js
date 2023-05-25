import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionComponent() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily:"Raleway"}}>What is Events2Go ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary" sx={{fontFamily:"Raleway"}}>
          Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontFamily:"Raleway"}}>How do I sell Tickets ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary" sx={{fontFamily:"Raleway"}}>
          Login or signup to your free Events2go account, then click Create Event. You can sell tickets for your free and paid events. Attendees can pay through PayPal to buy tickets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{fontFamily:"Raleway"}}>Cost or Pricing ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary" sx={{fontFamily:"Raleway"}}>
          Events2go App is free to use for individuals/attendees/participants to various events. Government Corporate and Charity organisations who are Event organisers pay a standard fee $150+Gst for free ticketed events, Government and Corporate organisations will pay 5% of + $1.00 per paid ticket and Charities will pay discounted rate of 2.5% + $0.50 per paid ticket. If you are thinking big and ongoing events let’s talk for customised pricing to suit you budget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography sx={{fontFamily:"Raleway"}}>Can I scan tickets using the Events2Go App ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary" sx={{fontFamily:"Raleway"}}>
          Yes, using the app on your smart device you can check-in and/or scan the QR Code issued on tickets. This means a lesser que times and happy attendees/participants.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography sx={{fontFamily:"Raleway"}}>What kind of events can be accessed through Events2Go App ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary" sx={{fontFamily:"Raleway"}}>
          All kinds of Events, and are NOT excluded to Events, Music festivals, Workshops, Webinars, Conferences, Community Events, Forums and Trainings.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}