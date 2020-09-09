import React from "react";
import {
	Button,
	makeStyles,
	Popper,
	Grow,
	Paper,
	ClickAwayListener,
	MenuList,
	MenuItem,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const MenuDropdown = ({ links }) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: "flex",
		},
		paper: {
			marginRight: theme.spacing(2),
		},
	}));

	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	// returns focus to the button
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<>
			<div className={classes.root}>
				<div>
					<Button
						ref={anchorRef}
						aria-controls={open ? "menu-list-grow" : undefined}
						aria-haspopup="true"
						onClick={handleToggle}
					>
						{links.title}
					</Button>
					<Popper
						open={open}
						anchorEl={anchorRef.current}
						role={undefined}
						transition
						disablePortal
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin:
										placement === "bottom" ? "center top" : "center bottom",
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleClose}>
										<MenuList
											autoFocusItem={open}
											id="menu-list-grow"
											onKeyDown={handleListKeyDown}
										>
											<MenuItem onClick={handleClose}>
												<NavLink
													to={links.linkOne}
													style={{ textDecoration: "none" }}
												>
													{links.linkOneTitle}
												</NavLink>
											</MenuItem>
											<MenuItem onClick={handleClose}>
												<NavLink
													to={links.linkTwo}
													style={{ textDecoration: "none" }}
												>
													{links.linkTwoTitle}
												</NavLink>
											</MenuItem>
											<MenuItem onClick={handleClose}>
												<NavLink
													to={links.linkThree}
													style={{ textDecoration: "none" }}
												>
													{links.linkThreeTitle}
												</NavLink>
											</MenuItem>
											<MenuItem onClick={handleClose}>
												<NavLink
													to={links.linkFour}
													style={{ textDecoration: "none" }}
												>
													{links.linkFourTitle}
												</NavLink>
											</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</div>
			</div>
		</>
	);
};

export default MenuDropdown;
