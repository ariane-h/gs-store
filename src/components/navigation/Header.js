import React from "react";
import Menu from "./Menu";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import TopNavBar from "./TopNavBar";
import PromoBar from "./PromoBar";
import { Link } from "react-router-dom";

const Header = () => {
	const useStyles = makeStyles((theme) => ({
		logo: {
			letterSpacing: "2px",
		},
		link: {
			color: "rgba(0, 0, 0, 0.87)",
			textDecoration: "none",
		},
	}));

	const classes = useStyles();
	return (
		<>
			<TopNavBar />
			<Grid container direction="column" justify="center" alignItems="center">
				<Link to="/" className={classes.link}>
					<Typography variant="h4" gutterBottom className={classes.logo}>
						golden shoe
					</Typography>
				</Link>
				<Menu />
			</Grid>
			<PromoBar />
		</>
	);
};

export default Header;
