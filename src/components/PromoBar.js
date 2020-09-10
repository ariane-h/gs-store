import React from "react";
import { NavLink } from "react-router-dom";
import { Toolbar, AppBar, makeStyles } from "@material-ui/core";

const PromoBar = () => {
	const useStyles = makeStyles((theme) => ({
		toolbar: {
			minHeight: "50px",
			display: "flex",
			justifyContent: "space-around",
			backgroundColor: "powderblue",
			position: "inherit",
		},

		link: {
			margin: theme.spacing(1, 1.5),
		},
		root: {
			padding: "2px 4px",
			display: "flex",
			alignItems: "center",
			width: 300,
		},

		iconButton: {
			padding: 10,
		},
	}));

	const classes = useStyles();

	return (
		<>
			<AppBar position="static" color="default" elevation={0}>
				<Toolbar className={classes.toolbar}>
					<NavLink to="/cart">Delivery Info</NavLink>

					<NavLink to="/cart">Delivery Info</NavLink>

					<NavLink to="/cart">Delivery Info</NavLink>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default PromoBar;
