import React, { useEffect, useRef, useState } from "react";
import {
	Button,
	makeStyles,
	Popper,
	Grow,
	Paper,
	ClickAwayListener,
	MenuList,
	MenuItem,
	Box,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const MenuDropdown = ({ menuItems }) => {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	// returns focus to the button
	const prevOpen = useRef(open);
	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

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

	const useStyles = makeStyles((theme) => ({
		container: {
			display: "flex",
		},
		paper: {
			marginRight: theme.spacing(2),
		},
		links: {
			textDecoration: "none",
		},
		text: {
			color: "rgba(0, 0, 0, 0.87)",
		},
	}));

	const classes = useStyles();

	if (menuItems) {
		return (
			<>
				<Box className={classes.container}>
					<Button
						ref={anchorRef}
						aria-controls={open ? "menu-list-grow" : undefined}
						aria-haspopup="true"
						onClick={handleToggle}
					>
						{menuItems.title}
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
											{menuItems.links.map((link) => {
												return (
													<NavLink
														to={link.src}
														className={classes.links}
														key={link.src}
													>
														<MenuItem
															onClick={handleClose}
															className={classes.text}
														>
															{link.desc}
														</MenuItem>
													</NavLink>
												);
											})}
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</Box>
			</>
		);
	}
};

export default MenuDropdown;
