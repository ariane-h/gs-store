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
import SearchBar from "./SearchBar";

const TopNavBar = () => {
	const useStyles = makeStyles((theme) => ({
		appBar: {},
		toolbar: {
			flexWrap: "wrap",
		},
		toolbarTitle: {
			flexGrow: 1,
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
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
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
						<IconButton color="primary" aria-label="my account">
							<PersonOutlineOutlinedIcon />
						</IconButton>
					</NavLink>

					<NavLink to="/cart">
						<IconButton color="primary" aria-label="shopping cart">
							<ShoppingBasketIcon />
						</IconButton>
					</NavLink>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default TopNavBar;
