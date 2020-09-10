import React from "react";
import { Grid, Typography, Container, makeStyles } from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ChatIcon from "@material-ui/icons/Chat";
import ContactCard from "./ContactCard";

const Contact = () => {
	const phoneCardContent = {
		title: "Give us a Call",
		icon: <PhoneIcon />,
		listItemOne: "Our Customer Service opening hours are:",
		listItemTwo: "Mon to Fri - 9am - 5pm",
		buttonText: "Call Us",
		actionIcon: null,
	};

	const emailCardContent = {
		title: "Send an Email",
		icon: <EmailIcon />,
		listItemOne: "We aim to reply within:",
		listItemTwo: "1-2 working days",
		buttonText: "Email Us",
		actionIcon: <StarIcon />,
	};

	const liveChatCardContent = {
		title: "Chat with us",
		icon: <ChatIcon />,
		listItemOne: "Chat with one of our",
		listItemTwo: "live chat support team",
		buttonText: "Start Chat",
		actionIcon: null,
	};

	const useStyles = makeStyles((theme) => ({
		heroContent: {
			padding: theme.spacing(4, 0, 6),
		},
	}));

	const classes = useStyles();
	return (
		<>
			<Container maxWidth="sm" component="main" className={classes.heroContent}>
				<Typography
					component="h1"
					variant="h5"
					align="center"
					color="textPrimary"
					gutterBottom
				>
					Contact Us
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p"
				>
					The best options to get in touch with us.
				</Typography>
			</Container>

			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					<ContactCard cardContent={phoneCardContent} />
					<ContactCard cardContent={emailCardContent} />
					<ContactCard cardContent={liveChatCardContent} />
				</Grid>
			</Container>
		</>
	);
};

export default Contact;
