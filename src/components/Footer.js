import React from "react";
import { Typography, makeStyles, CssBaseline, Grid } from "@material-ui/core";

const Footer = () => {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: "flex",
			flexDirection: "column",
			minHeight: "100vh",
		},

		footer: {
			padding: theme.spacing(3, 2),
			marginTop: "auto",
			backgroundColor:
				theme.palette.type === "light"
					? theme.palette.grey[200]
					: theme.palette.grey[800],
		},
	}));

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<footer className={classes.footer}>
				<Grid
					container
					direction="row"
					justify="space-evenly"
					alignItems="center"
					spacing={4}
				>
					<Grid item xs={4}>
						<Typography variant="body1">Help and Info</Typography>
						<Typography variant="body2">Contact</Typography>
						<Typography variant="body2">Delivery and Returns</Typography>
						<Typography variant="body2">Find a Store</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="body1">About</Typography>
						<Typography variant="body2">About Us</Typography>
						<Typography variant="body2">Careers</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="body1">Follow</Typography>
						<Typography variant="body2">Twitter</Typography>
						<Typography variant="body2">Facebook</Typography>
						<Typography variant="body2">Instagram</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body2" color="textSecondary">
							Copyright © Golden Shoe 2020
						</Typography>
					</Grid>
				</Grid>
			</footer>
		</div>
	);
};

export default Footer;
