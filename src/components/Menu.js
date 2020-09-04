import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<Toolbar>
			<>
				<Button color="inherit" component={NavLink} to="/">
					Home
				</Button>

				<Button color="inherit" component={NavLink} to="/collections">
					Collections
				</Button>

				<Button color="inherit" component={NavLink} to="/products/1">
					Product Page
				</Button>
			</>
		</Toolbar>
	);
};

export default Menu;
