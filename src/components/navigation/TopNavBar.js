import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	IconButton,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SearchBar from "../search/SearchBar";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";

const TopNavBar = () => {
	const useStyles = makeStyles((theme) => ({
		appBar: {
			marginBottom: "20px",
		},
		toolbar: {
			flexWrap: "wrap",
			minHeight: "30px",
		},
		toolbarTitle: {
			flexGrow: 1,
		},
		iconButton: {
			color: "darkslategrey",
		},
	}));

	const classes = useStyles();
	return (
		<>
			<AppBar
				position="static"
				color="default"
				elevation={0}
				className={classes.appBar}
			>
				<Toolbar className={classes.toolbar}>
					<Typography
						variant="h6"
						color="inherit"
						noWrap
						className={classes.toolbarTitle}
					></Typography>

					<SearchBar />

					<NavLink to="#">
						<IconButton aria-label="my account" className={classes.iconButton}>
							<PersonOutlineOutlinedIcon />
						</IconButton>
					</NavLink>

					<NavLink to="/contact">
						<IconButton aria-label="help" className={classes.iconButton}>
							<HelpOutlineRoundedIcon />
						</IconButton>
					</NavLink>

					<NavLink to="/cart">
						<IconButton
							aria-label="shopping cart"
							className={classes.iconButton}
						>
							<ShoppingBasketIcon />
						</IconButton>
					</NavLink>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default TopNavBar;
