import React, { useContext } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	IconButton,
} from '@material-ui/core';
import { withRouter, NavLink } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchBar from '../search/SearchBar';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import firebase from '../../config/firebase';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { AuthContext } from '../../contexts/AuthContext';

const TopNavBar = (props) => {
	const { currentUser } = useContext(AuthContext);

	const useStyles = makeStyles((theme) => ({
		appBar: {
			marginBottom: '20px',
			backgroundColor: '#F8F3F2',
		},
		toolbar: {
			minHeight: '30px',
		},
		toolbarTitle: {
			flexGrow: 1,
		},
		iconButton: {
			color: 'rgba(0, 0, 0, 0.87)',
		},
	}));

	const classes = useStyles();

	const handleSignOut = () => {
		props.history.push('/login');
		firebase.auth().signOut();
	};

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

					{currentUser ? (
						<IconButton
							aria-label="logout"
							className={classes.iconButton}
							onClick={handleSignOut}
						>
							<LockOpenIcon />
						</IconButton>
					) : null}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default withRouter(TopNavBar);
