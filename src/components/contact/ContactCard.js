import React from "react";
import {
	Grid,
	Typography,
	makeStyles,
	CardActions,
	Button,
	CardContent,
	CardHeader,
	Card,
} from "@material-ui/core";

const ContactCard = ({ cardContent }) => {
	const useStyles = makeStyles((theme) => ({
		card: {
			height: "280px",
		},
		cardList: {
			margin: 0,
			padding: 0,
			listStyle: "none",
		},
		cardHeader: {
			backgroundColor:
				theme.palette.type === "light"
					? theme.palette.grey[200]
					: theme.palette.grey[700],
		},
		cardHighlight: {
			display: "flex",
			justifyContent: "center",
			alignItems: "baseline",
			marginBottom: theme.spacing(2),
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Grid item xs={12} md={4}>
				<Card className={classes.card}>
					<CardHeader
						title={cardContent.title}
						titleTypographyProps={{ align: "center" }}
						subheaderTypographyProps={{ align: "center" }}
						action={cardContent.actionIcon}
						className={classes.cardHeader}
					/>
					<CardActions>
						<Button fullWidth color="primary">
							{cardContent.buttonText}
						</Button>
					</CardActions>
					<CardContent>
						<div className={classes.cardHighlight}>{cardContent.icon}</div>
						<ul className={classes.cardList}>
							<Typography component="li" variant="subtitle1" align="center">
								{cardContent.listItemOne}
							</Typography>
							<Typography component="li" variant="subtitle1" align="center">
								{cardContent.listItemTwo}
							</Typography>
						</ul>
					</CardContent>
				</Card>
			</Grid>
		</>
	);
};

export default ContactCard;
