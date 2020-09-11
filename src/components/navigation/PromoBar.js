import React from "react";
import { Link } from "react-router-dom";
import {
	Toolbar,
	AppBar,
	makeStyles,
	Typography,
	Box,
} from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const PromoBar = () => {
	const useStyles = makeStyles((theme) => ({
		toolbar: {
			minHeight: "50px",
			display: "flex",
			justifyContent: "space-around",
			backgroundColor: "#ECE1DE",
			position: "inherit",
		},

		link: {
			textDecoration: "none",
		},
		title: {
			width: "130px",
			display: "flex",
			justifyContent: "space-evenly",
			alignItems: "center",
		},
	}));

	const classes = useStyles();

	return (
		<AppBar position="static" color="default" elevation={0}>
			<Toolbar className={classes.toolbar}>
				<Link to="/delivery" className={classes.link} color="inherit">
					<Box className={classes.title}>
						<Typography
							variant="body2"
							style={{ lineHeight: "2" }}
							color="textPrimary"
						>
							Delivery Info
						</Typography>
						<LocalShippingIcon
							fontSize="small"
							style={{ color: "darkslategrey", paddingLeft: "2px" }}
						/>
					</Box>
				</Link>

				<Link to="/#" className={classes.link} color="inherit">
					<Box className={classes.content}>
						<Box className={classes.title}>
							<Typography
								variant="body2"
								style={{ lineHeight: "2" }}
								color="textPrimary"
							>
								SALE! Up to 20% off
							</Typography>
						</Box>
					</Box>
				</Link>

				<Link to="/#" className={classes.link} color="inherit">
					<Box className={classes.content}>
						<Box className={classes.title}>
							<Typography
								variant="body2"
								style={{ lineHeight: "2" }}
								color="textPrimary"
							>
								Visit Our Store
							</Typography>
						</Box>
					</Box>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default PromoBar;
