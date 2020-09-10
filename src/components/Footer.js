import React from "react";
import {
	Typography,
	makeStyles,
	CssBaseline,
	Grid,
	Box,
} from "@material-ui/core";

const Footer = () => {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: "flex",
			flexDirection: "column",
			minHeight: "70vh",
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
				<Grid container direction="row" justify="space-evenly" spacing={4}>
					<Grid item xs={4}>
						<Box display="flex" flexDirection="column" alignItems="center">
							<Typography variant="body1">Help and Info</Typography>
							<Typography variant="body2">Contact</Typography>
							<Typography variant="body2">Delivery and Returns</Typography>
							<Typography variant="body2">Find a Store</Typography>
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box display="flex" flexDirection="column" alignItems="center">
							<Typography variant="body1">About</Typography>
							<Typography variant="body2">About Us</Typography>
							<Typography variant="body2">Careers</Typography>
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box display="flex" flexDirection="column" alignItems="center">
							<Typography variant="body1">Follow</Typography>
							<Typography variant="body2">Twitter</Typography>
							<Typography variant="body2">Facebook</Typography>
							<Typography variant="body2">Instagram</Typography>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box display="flex" flexDirection="column" alignItems="center">
							<Typography variant="body2" color="textSecondary">
								Copyright © Golden Shoe 2020
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</footer>
		</div>
	);
};

export default Footer;
